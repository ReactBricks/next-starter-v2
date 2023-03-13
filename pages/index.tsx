import { useContext } from "react"
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
  types,
} from "react-bricks/frontend"
import Head from "next/head"
import { GetStaticProps } from "next"

import config from "../react-bricks/config"
import Layout from "../components/layout"
import ErrorNoKeys from "../components/errorNoKeys"
import ErrorNoHomePage from "../components/errorNoHomePage"

interface HomeProps {
  page: types.Page
  header: types.Page
  footer: types.Page
  error: string
}

const Home: React.FC<HomeProps> = ({ page, header, footer, error }) => {
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
      {error === "NOKEYS" && <ErrorNoKeys />}
      {error === "NOPAGE" && <ErrorNoHomePage />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: "NOKEYS" } }
  }
  try {
    const page = await fetchPage("home", config.apiKey, context.locale)
    const header = await fetchPage("header", config.apiKey, context.locale)
    const footer = await fetchPage("footer", config.apiKey, context.locale)
    return { props: { page, header, footer } }
  } catch {
    return { props: { error: "NOPAGE" } }
  }
}

export default Home
