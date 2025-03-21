import styles from './Main.module.css';
import Sections from './Sections/Sections';

function Main() {
    return (
        <div className={styles.main}>
            <Sections></Sections>
        </div>
    )
}

export default Main;