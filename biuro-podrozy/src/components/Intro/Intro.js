import styles from './Intro.module.css';

function Intro() {
    return (
        <div>
            <div className={styles.intro} id="home">
            </div>
            <h1 className={styles.introText}>Travel with us</h1>
            <p className={styles.introPar}>Choose place and we'll create your ideal trip</p>
        </div>
    )
}

export default Intro;