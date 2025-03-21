import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>

            <h2 className={styles.header}>Stay up to date with new offers</h2>
            <p>Subscribe to our newsletter to be the first to know about special offers</p>
            <div className={styles.row}>
                <input type="text" placeholder="E-mail" className={styles.input}></input>
                <button className={`${styles.btn} button`}>Subscribe</button>
            </div>
            <p className={styles.travel}>TRAVEL@2022</p>
        </div>
    )
}

export default Footer;