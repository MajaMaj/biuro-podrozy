import styles from './Main.module.css';
import Sections from './Sections/Sections';

function Main() {
    return (
        <div className={styles.main}>
            <Sections className={styles.section}></Sections>
        </div>
    )
}

export default Main;