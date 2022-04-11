import styles from './Menu.module.css';
import { useState } from 'react';
import Icon from '../Header/Icon/Icon';


function Menu() {
    const [sidebar, setSidebar] = useState(false);
    const [animation, setAnimation] = useState(false);
    const showSidebar = () => {
        if (sidebar === false) {
            setSidebar(true);
            setAnimation(false);
        } else {
            setSidebar(false);
            setAnimation(true);
        }
    }



    return (
        <div>
            <div className={styles.burgerBlock} onClick={showSidebar}>
                <div className={sidebar ? `${styles.cross}` : `${styles.burger}`} />
            </div>
            <div className={sidebar ? `${styles.menu} ${styles.deactivation}` : `${styles.menu} ${styles.active} ${animation ? `${styles.animation}` : ''}`}>
                <div>
                    <li className={styles.item}><a href="#">Home</a></li>
                    <li className={styles.item}><a href="#">Gallery</a></li>
                    <li className={styles.item}><a href="#">Abous us</a></li>
                    <li className={styles.item}><a href="#">Contact</a></li>
                </div>
                <Icon></Icon>
            </div>
        </div>
    )
}

export default Menu;
