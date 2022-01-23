import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './../Layouts/Layout'
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  );
}

export default MyApp
