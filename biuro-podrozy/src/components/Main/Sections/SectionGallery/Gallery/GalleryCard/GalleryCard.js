import styles from './GalleryCard.module.css';



function GalleryCard(props) {
    return (
        <div>
            <div className={styles.imgCard}>
                <img src={props.img} className={styles.img}></img>
            </div>
            <div className={styles.card}>
                <div className={styles.describeCard}>
                    <h2>{props.name}</h2>
                    <p>{props.describe}</p>
                    <p>{props.price}</p>
                    <button className="button">Read more...</button>
                </div>
            </div>
        </div>

    );
}

export default GalleryCard;