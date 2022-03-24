import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.containerMenu}>
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