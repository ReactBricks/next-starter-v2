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
  // popularPosts,
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
          <div className="max-w-6xl mx-auto px-8 py-16">
            <h1 className="max-w-2xl text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4">
              {filterTag} articles
            </h1>

            <div className="flex flex-wrap items-center">
              {allTags
                ?.filter((tag) => tag !== 'popular')
                .map((tag) => (
                  <Link
                    href={`/blog/tag/${tag}`}
                    key={tag}
                    className="inline-block text-sm mr-2 mb-2 transform transition-all duration-200 text-gray-800 border border-gray-100 bg-gray-100 hover:bg-gray-50 hover:text-sky-600 hover:border-sky-500 hover:-translate-y-0.5 rounded-md py-1.5 px-2.5"
                  >
                    {tag}
                  </Link>
                ))}
            </div>

            <hr className="mt-6 mb-10" />
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-12">
              {pagesByTag?.map((post) => (
                <PostListItem
                  key={post.id}
                  title={post.name}
                  href={post.slug}
                  content={post.meta.description}
                  author={post.author}
                  date={post.publishedAt}
                  featuredImg={post.meta.featuredImage || ''}
                />
              ))}
            </div>
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
