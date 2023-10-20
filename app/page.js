import styles from './page.module.css'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
