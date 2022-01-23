import Head from 'next/head'
import Image from 'next/image'
import Footer from './../components/common/Footer/Footer'
import styles from '../styles/Landing.module.scss'
import Hero from '../components/Landing/Hero/Hero'
import About from '../components/Landing/About/About'
import Services from '../components/Landing/Services/Services'
import Clientele from '../components/Landing/Clientele/Clientele'
import ContactUs from '../components/Landing/ContactUs/ContactUs'
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="A performance driven team of young pioneer working to solve problems in Manufacturing, Defence and Consumer Electronics." />
        <link rel="icon" href="/static/images/logo.png" />
        <title>Vir Innovations</title>
      </Head>

      <main className={styles.main}>
        <div >
          <Hero />
          <About />
          <Services />
          <Clientele />
          <ContactUs />
        </div>
      </main>
    </div>
  )
}
