import styles from './footer.module.css'

export default function Footer() {

    return (
        <>
            <footer className={styles.footer} id='footer'>
                <h4>- - - M E M B E R S - - -</h4>
                <p>Abellana, Zenno</p>
                <p>Bonpin, Adrian</p>
                <p>Dubrico, Desiree</p>
                <p>Derecho, Andrew</p>
                <p>Ebrada, Zraim</p>
                <p>Sobrecaray, Ian</p>
                <p>Jacob, Xander</p>
                <p>Tapia, Malcolm</p>
                <p>Marinao, Luis</p>
            </footer>
            <footer className={styles.footer2}>
                <span>© 2024 Group 3</span>
                <span>Only for use within USC</span>
            </footer>
        </>
    )
}