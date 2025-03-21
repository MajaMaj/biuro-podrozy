import GalleryCard from './GalleryCard/GalleryCard';
import Img1 from '../../../../../assets/images/brazylia.jpg';
import Img2 from '../../../../../assets/images/turcja.jpg';
import Img3 from '../../../../../assets/images/dubaj.jpg';
import Img4 from '../../../../../assets/images/finlandia.jpg';
import styles from './Gallery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


function Gallery() {


    const cards = [
        {
            id: 1,
            img: Img1,
            name: 'Brasil',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros.",
            price: 2300,
        },
        {
            id: 2,
            img: Img2,
            name: 'Turkey',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros.",
            price: 1200,
        },
        {
            id: 3,
            img: Img3,
            name: 'Dubai',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros.",
            price: 3049,
        },
        {
            id: 4,
            img: Img4,
            name: 'Finland',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros.",
            price: 890,
        }
    ]




    const [selectedOfert, setSelectedOfert] = useState(1);

    useEffect(() => {
        if (selectedOfert > 4) {
            setSelectedOfert(1);
        }
        else if (selectedOfert < 1) {
            setSelectedOfert(4);
        }
    }, [selectedOfert]);

    const next = () => {
        setSelectedOfert(selectedOfert + 1);
    }

    const prev = () => {
        setSelectedOfert(selectedOfert - 1);
    }

    return (
        <div className={styles.container}>
            {
                cards.map(card => {
                    return (
                        <div key={card.id} className={(card.id === selectedOfert) ? "" : `${styles.hidden}`}>
                            <GalleryCard {...card} />
                        </div>
                    )
                })
            }
            <FontAwesomeIcon icon={faAngleLeft} className={`${styles.icon} ${styles.left}`} size="3x" onClick={prev} ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faAngleRight} className={`${styles.icon} ${styles.right}`} size="3x" onClick={next}></FontAwesomeIcon>
        </div>
    )
}

export default Gallery;