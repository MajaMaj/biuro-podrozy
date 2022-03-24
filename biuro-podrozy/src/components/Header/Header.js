import Menu from '../Menu/Menu';
import styles from './Header.module.css';
import Icon from './Icon/Icon';

function Header() {
        return (
            <div className={styles.navbar}>
            <span className={styles.logo}>Travel</span>
            <Menu></Menu>
            <Icon></Icon>
            </div>
        );
}

export default Header;