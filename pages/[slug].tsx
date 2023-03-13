import { useContext } from "react"
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  fetchPages,
  cleanPage,
  types,
} from "react-bricks/frontend"
import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"

import config from "../react-bricks/config"
import Layout from "../components/layout"
import ErrorNoPage from "../components/errorNoPage"

interface PageProps {
  page: types.Page
  header: types.Page
  footer: types.Page
  error: string
}

const Page: React.FC<PageProps> = ({ page, header, footer, error }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext)
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name='description' content={page.meta.description} />
          </Head>
          <PageViewer page={headerOk} />
          <PageViewer page={pageOk} />
          <PageViewer page={footerOk} />
        </>
      )}
      {error === "NOPAGE" && <ErrorNoPage />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: "NOKEYS" } }
  }
  const { slug } = context.params
  try {
    const page = await fetchPage(slug.toString(), config.apiKey, context.locale)
    const header = await fetchPage("header", config.apiKey, context.locale)
    const footer = await fetchPage("footer", config.apiKey, context.locale)
    return { props: { page, header, footer } }
  } catch {
    return { props: { error: "NOPAGE" } }
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  if (!config.apiKey) {
    return { paths: [], fallback: false }
  }

  const allPages = await fetchPages(config.apiKey)

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
