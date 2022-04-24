import styles from './SectionAboutUs.module.css';
import FB from '../../../../assets/images/fb.png';
import TEDX from '../../../../assets/images/tedx.png';
import SEGA from '../../../../assets/images/sega.png';
import FEDEX from '../../../../assets/images/fedex.png';
import SAMSUNG from '../../../../assets/images/samsung.png';
import COCACOLA from '../../../../assets/images/cocacola.png';
import METFONE from '../../../../assets/images/metfone.png';


function SectionAboutUs() {
    return (
        <div id="aboutUs" className={styles.sec}>
            <h2 className="head">About us</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada fringilla commodo.
                    Cras lacinia aliquam eleifend. Aliquam eu molestie dolor. Praesent malesuada erat mauris, a
                    imperdiet est sollicitudin convallis. Donec dolor ex, imperdiet mollis maximus at, tristique
                    eget nulla. Integer sed venenatis lacus. Integer id dictum mauris, eget efficitur arcu. Nulla
                    pretium odio at nisi rhoncus, dapibus convallis tortor ultrices.
                </div>
                <div className={`${styles.col} ${styles.colRight}`}>
                    <h2 className={styles.companies}>100+ companies trusted us </h2>
                    <img src={FB} className={styles.img}></img>
                    <img src={TEDX} className={styles.img}></img>
                    <img src={SEGA} className={styles.img}></img>
                    <img src={FEDEX} className={styles.img}></img>
                    <img src={SAMSUNG} className={styles.img}></img>
                    <img src={COCACOLA} className={styles.img}></img>
                    <img src={METFONE} className={styles.img}></img>
                </div>
            </div>

        </div>

    );
}

export default SectionAboutUs;