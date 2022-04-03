import styles from './Gallery.module.css';
import GalleryCard from './GalleryCard/GalleryCard';

function Gallery(){

    const cards = [
        {
            id: 1,
            name: 'Calculated Weather',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros.",
            price: 1200,
        },
        {
            id: 2,
            name: 'Best Flights',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        },
        {
            id: 3,
            name: 'Local Events',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        },
        {
            id: 4,
            name: 'Super Service',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        }
    ]

    return(
        <div>
        {cards.map(card => <GalleryCard key={card.id} {...card} />)}
        </div>
    )
}

export default Gallery;