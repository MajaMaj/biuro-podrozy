import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.css';

function Menu() {
    const hamburgerMenuShow = () => {

    }
    return (
        <div className={styles.containerMenu}>
            <FontAwesomeIcon icon={faBars} size="2x" className={styles.hamburger} onClick={hamburgerMenuShow}></FontAwesomeIcon>
            <div></div>
            <ul className={styles.list}>
                <li className={styles.item}><a href="#">Home</a></li>
                <li className={styles.item}><a href="#">Gallery</a></li>
                <li className={styles.item}><a href="#">Abous us</a></li>
                <li className={styles.item}><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu;