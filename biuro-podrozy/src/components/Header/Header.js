import Menu from '../Menu/Menu';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

function Header() {
    const [navbar, setColor] = useState(false);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setColor(window.scrollY > 30);
        });
        setAnimation(true);
    }, []);

    return (
        <div className={navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar} ${animation ? `${styles.colorHide}` : ''}`}>
            <div className={styles.nav}>
                <span className={styles.logo}>Travel</span>
                <Menu></Menu>

            </div>
        </div>
    );
}

export default Header;