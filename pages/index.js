import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>

      </Head>

      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cumque ex at officiis amet. Unde ex amet corporis quia molestiae, facilis voluptatibus reiciendis cum quae cupiditate officia architecto? Nam, quo!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cumque ex at officiis amet. Unde ex amet corporis quia molestiae, facilis voluptatibus reiciendis cum quae cupiditate officia architecto? Nam, quo!</p>
        <Link href="/ninjas">
        <a className={styles.btn}>See Ninja List</a>
        </Link>  
      </div>
    </>
  )
}
