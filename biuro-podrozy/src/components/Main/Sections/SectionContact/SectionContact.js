import Form from "./Form/Form";
import styles from './sectionContact.module.css';
import TRAVEL from '../../../../assets/images/travel.jpg';

function SectionContact() {
    return (
        <div id="contact" className={styles.container}>
            <h3 className={`${styles.head} head`}>Contact Us</h3>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Form></Form>
                </div>
                <div className={styles.col}>
                    <h2 className={styles.header}>Plan your journey with us</h2>
                    <div className={styles.imgBox}>
                        <img src={TRAVEL} className={styles.img}></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionContact;