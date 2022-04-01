import type { NextPage } from 'next'
import Footer from '../components/footer/Footer'
import Category from '../components/category/Category'
import BestPortfolio from '../components/bestportfolio/BestPortfolio'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Category/>
      <BestPortfolio/>
     <Footer/>
    </div>
  )
}

export default Home
