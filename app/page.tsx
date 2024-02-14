import Link from 'next/link'
import styles from './landing.module.css'
import { LicenseIcon } from '@/utils/images'
import FLBullets from '@/components/bullets'

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
            <Link href={'#try'}>
              <button type='button'>Learn More</button>
            </Link>
            <Link href={'https://instagram.com/adrianbonpin'}>
              <button type='button'>Developed By</button>
            </Link>
          </div>
        </div>
        <div className={styles.main_splash}>
          <LicenseIcon/>
        </div>
      </section>
      <section id='try' className={styles.bullets}>
        <FLBullets />
      </section>
    </>
  )
}