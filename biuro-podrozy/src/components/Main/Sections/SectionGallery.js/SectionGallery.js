import styles from './SectionGallery.module.css';
import Gallery from './Gallery/Gallery';

function SectionGallery() {
    return (
        <div className={styles.container}>
            <h1 className="head">Choose trip</h1>
            <Gallery></Gallery>
        </div>
    );
}

export default SectionGallery;