import iconImg from '../../../assets/images/icon.png';
import iconImg2 from '../../../assets/images/icon2.png';
import styles from './Icon.module.css';

function Icon() {
    return (
        <div>
            <img src={iconImg} className={styles.icon}></img>
            <img src={iconImg2} className={styles.icon}></img>
        </div>
    )
}

export default Icon;