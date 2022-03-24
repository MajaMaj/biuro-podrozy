import iconImg from '../../../assets/images/icon.png';
import styles from './Icon.module.css';

function Icon() {
    return (
        <div>
            <img src={iconImg} className={styles.icon}></img>
        </div>
    )
}

export default Icon;