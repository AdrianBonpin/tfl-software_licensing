import { LogoIcon } from '@/utils/images'
import styles from './nav.module.css'
import Link from 'next/link'

export default function Navbar() {

    return(
        <nav className={styles.navbar}>
            <Link href={'/'}><LogoIcon className={styles.logo}/></Link>
            <Link href={'#top'}>FL Study</Link>
            <Link href={'#try'}>Software Licensing</Link>
            <Link href={'#footer'}><button type='button'>Group 3</button></Link>
        </nav>
    )
}