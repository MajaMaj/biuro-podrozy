import styles from './WhyCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function WhyCards(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <FontAwesomeIcon icon={props.icon} size="3x" />
                <h1>{props.name}</h1>
                <p className={styles.par}>{props.describe}</p>
            </div>
        </div>
    );
}

export default WhyCards;