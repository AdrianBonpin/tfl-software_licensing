import Link from 'next/link'
import styles from './landing.module.css'

export default function LandingPage() {

  return(
    <>
      <div className={styles.bg_gif} />
      <section className={styles.col_2} id='top'>
        <div className={styles.main_text}>
          <h1>Software Licensing</h1>
          <h2>A legal agreement acting as a permission slip for software</h2>
          <h3>Learn more about software licensing</h3>
          <div>
            <Link href={''}>
              <button type='button'>Try for free</button>
            </Link>
            <Link href={''}>
              <button type='button'>Buy now</button>
            </Link>
          </div>
        </div>
        <div className={styles.main_splash}>
          
        </div>
      </section>
    </>
  )
}