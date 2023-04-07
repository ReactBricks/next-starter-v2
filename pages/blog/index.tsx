import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  cleanPage,
  fetchPage,
  fetchPages,
  fetchTags,
  types,
  ReactBricksContext,
  PageViewer,
} from 'react-bricks/frontend'
import PostListItem from '../../components/PostListItem'
import ErrorNoKeys from '../../components/errorNoKeys'
import ErrorNoHeader from '../../components/errorNoHeader'
import ErrorNoFooter from '../../components/errorNoFooter'
import Layout from '../../components/layout'
import config from '../../react-bricks/config'
import { useContext } from 'react'

interface HomeProps {
  errorNoKeys: string
  errorHeader: string
  errorFooter: string
  tags: string[]
  posts: types.Page[]
  header: types.Page
  footer: types.Page
}

const BlogList: React.FC<HomeProps> = ({
  tags,
  posts,
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
            <title>Post List</title>
            <meta name="description" content="React Bricks blog starter" />
          </Head>
          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} />
          ) : (
            <ErrorNoHeader />
          )}
          <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4">
            Blog
          </h1>
          <div className="max-w-6xl mx-auto px-8 py-16">
            <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">
              Recently published
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-12">
              {posts?.map((post) => {
                return (
                  <PostListItem
                    key={post.id}
                    title={post.name}
                    href={post.slug}
                    content={post.meta.description}
                    author={post.author}
                    date={post.createdAt}
                    featuredImg={post.meta.featuredImage || ''}
                  />
                )
              })}
            </div>
            {/* <section className="flex-1 space-y-16">
              <div>
                <h2 className="text-pink-500 uppercase mb-8 tracking-widest font-bold">
                  Tags
                </h2>
                <div className="flex flex-wrap items-center">
                  {tags
                    ?.filter((tag) => tag !== 'popular')
                    .map((tag) => (
                      <Link
                        href={`/blog/tag/${tag}`}
                        key={tag}
                        className="inline-block text-sm font-bold mr-2 mb-2 transform duration-200 text-cyan-800 bg-cyan-100 hover:bg-cyan-200 hover:text-cyan-900 rounded-md px-2 py-1"
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
                  {posts
                    ?.filter((post) =>
                      post.tags.find((tag) => tag === 'popular')
                    )
                    .map((post) => (
                      <li key={post.id}>
                        <Link
                          href={`/blog/post/${post.slug}`}
                          className="text-gray-900 hover:text-cyan-600 font-bold text-lg leading-10 transition-colors"
                        >
                          {post.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </section> */}
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
  let header: {} | types.Page
  let footer: {} | types.Page
  let errorNoKeys: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { errorNoKeys } }
  }
  try {
    const { items: tags } = await fetchTags(process.env.API_KEY)
    tags.sort()

    const posts = await fetchPages(process.env.API_KEY, {
      type: 'blog',
      pageSize: 1000,
      sort: '-publishedAt',
    })

    header = await fetchPage('header', config.apiKey, context.locale).catch(
      () => {
        errorHeader = true
        return {}
      }
    )

    footer = await fetchPage('footer', config.apiKey, context.locale).catch(
      () => {
        errorFooter = true
        return {}
      }
    )

    return { props: { posts, tags, header, footer, errorHeader, errorFooter } }
  } catch {
    return { props: { header, footer, errorHeader, errorFooter } }
  }
}

export default BlogList
