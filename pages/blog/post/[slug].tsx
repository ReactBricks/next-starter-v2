import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useContext } from "react"
import {
  cleanPage,
  fetchPage,
  fetchPages,
  PageViewer,
  ReactBricksContext,
  types,
} from "react-bricks/frontend"
import ErrorNoKeys from "../../../components/errorNoKeys"
import ErrorNoHeader from "../../../components/errorNoHeader"
import ErrorNoFooter from "../../../components/errorNoFooter"
import Layout from "../../../components/layout"
import config from "../../../react-bricks/config"

interface PageProps {
  page: types.Page
  header: types.Page
  footer: types.Page
  errorPage: string
  errorNoKeys: string
  errorHeader: string
  errorFooter: string
}

const Page: React.FC<PageProps> = ({
  page,
  header,
  footer,
  errorNoKeys,
  errorPage,
  errorHeader,
  errorFooter,
}) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext)
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      {pageOk && !errorPage && !errorNoKeys && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name='description' content={page.meta.description} />
          </Head>
          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} />
          ) : (
            <ErrorNoHeader />
          )}
          <PageViewer page={pageOk} />
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

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { errorNoKeys } }
  }

  let errorPage: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  const { slug } = context.params

  const [page, header, footer] = await Promise.all([
    fetchPage(slug.toString(), config.apiKey, context.locale).catch(() => {
      errorPage = true
      return {}
    }),
    fetchPage("header", config.apiKey, context.locale).catch(() => {
      errorHeader = true
      return {}
    }),
    fetchPage("footer", config.apiKey, context.locale).catch(() => {
      errorFooter = true
      return {}
    }),
  ])
  
  return {
    props: {
      page,
      header,
      footer,
      errorNoKeys,
      errorPage,
      errorHeader,
      errorFooter,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  if (!config.apiKey) {
    return { paths: [], fallback: false }
  }

  const allPages = await fetchPages(config.apiKey, {
    type: "blog",
    pageSize: 1000,
    sort: "-publishedAt",
  })

  const paths = allPages
    .map((page) =>
      page.translations
        .filter(
          (translation) => context.locales.indexOf(translation.language) > -1
        )
        .map((translation) => ({
          params: { slug: translation.slug },
          locale: translation.language,
        }))
    )
    .flat()

  return { paths, fallback: false }
}

export default Page
