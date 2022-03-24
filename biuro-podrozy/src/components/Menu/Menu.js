import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.containerMenu}>
            <ul className={styles.list}>
            <li className={styles.item}>Home</li>
            <li className={styles.item}>Gallery</li>
            <li className={styles.item}>Abous us</li>
            <li className={styles.item}>Contact</li>
            </ul>
        </div>
    )
}

export default Menu;