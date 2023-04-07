import classNames from 'classnames'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  cleanPage,
  fetchPage,
  fetchPages,
  fetchTags,
  PageViewer,
  ReactBricksContext,
  types,
} from 'react-bricks/frontend'
import PostListItem from '../../../components/PostListItem'
import Layout from '../../../components/layout'
import config from '../../../react-bricks/config'
import { useContext } from 'react'
import ErrorNoKeys from '../../../components/errorNoKeys'
import ErrorNoHeader from '../../../components/errorNoHeader'
import ErrorNoFooter from '../../../components/errorNoFooter'

interface PageProps {
  pagesByTag: types.Page[]
  popularPosts: types.Page[]
  errorNoKeys: string
  errorHeader: string
  errorFooter: string
  filterTag: string
  allTags: string[]
  header: types.Page
  footer: types.Page
}

const Page: React.FC<PageProps> = ({
  filterTag,
  pagesByTag,
  popularPosts,
  allTags,
  errorNoKeys,
  errorHeader,
  errorFooter,
  header,
  footer,
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null
  return (
    <Layout>
      {!errorNoKeys && (
        <>
          <Head>
            <title>{filterTag}</title>
            <meta name="description" content={filterTag} />
          </Head>
          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} />
          ) : (
            <ErrorNoHeader />
          )}
          <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4">
            Blog
          </h1>
          <div className="max-w-6xl mx-auto px-8 py-16 flex space-x-24">
            <section className="flex-[2] space-y-8">
              <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">
                {filterTag}
              </h2>
              {pagesByTag?.map((post) => (
                <PostListItem
                  key={post.id}
                  title={post.name}
                  href={post.slug}
                  content={post.meta.description}
                  author={post.author}
                  date={post.createdAt}
                  featuredImg={post.meta.featuredImage || ''}
                />
              ))}
            </section>
            <section className="flex-1 space-y-16">
              <div>
                <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">
                  Tags
                </h2>
                <div className="flex flex-wrap items-center">
                  {/* T A G  */}
                  {allTags
                    ?.filter((tag) => tag !== 'popular')
                    .map((tag) => (
                      <Link
                        href={tag === filterTag ? '/blog' : `/blog/tag/${tag}`}
                        key={tag}
                        className={classNames(
                          'inline-block text-sm font-bold mr-2 mb-2 transform duration-200  rounded-md px-2 py-1',
                          tag === filterTag
                            ? 'text-blue-800 bg-blue-100 hover:bg-blue-200 hover:text-blue-900'
                            : 'text-cyan-800 bg-cyan-100 hover:bg-cyan-200 hover:text-cyan-900'
                        )}
                      >
                        {tag}
                      </Link>
                    ))}
                </div>
              </div>
              <div>
                <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">
                  Most Popular
                </h2>
                <ul>
                  {popularPosts?.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/posts/${post.slug}`}
                        className="text-gray-900 hover:text-cyan-600 font-bold text-lg leading-10 transition-colors"
                      >
                        {post.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} />
          ) : (
            <ErrorNoFooter />
          )}
        </>
      )}
      {errorNoKeys && <ErrorNoKeys />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let errorNoKeys: boolean = false
  let errorPage: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { error: 'NOKEYS' } }
  }

  const { tag } = context.params

  try {
    const [pagesByTag, tagsResult, header, footer] = await Promise.all([
      fetchPages(config.apiKey, {
        tag: tag.toString(),
        type: 'blog',
        pageSize: 100,
        sort: '-publishedAt',
      }),
      fetchTags(process.env.API_KEY),
      fetchPage('header', config.apiKey, context.locale).catch(() => {
        errorHeader = true
        return {}
      }),
      fetchPage('footer', config.apiKey, context.locale).catch(() => {
        errorFooter = true
        return {}
      }),
    ])

    return {
      props: {
        pagesByTag,
        filterTag: tag,
        allTags: tagsResult.items.sort(),
        header,
        footer,
        errorNoKeys,
        errorPage,
        errorHeader,
        errorFooter,
      },
    }
  } catch {
    return { props: {} }
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  if (!config.apiKey) {
    return { paths: [], fallback: false }
  }

  const { items: tags } = await fetchTags(process.env.API_KEY)

  const paths = tags.map((tag) => `/blog/tag/${tag}`)

  return { paths, fallback: false }
}

export default Page
