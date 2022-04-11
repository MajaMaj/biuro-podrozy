import WhyCards from './WhyCards/WhyCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

function SectionWhy() {

    const cards = [
        {
            id: 1,
            icon: faCloud,
            name: 'Calculated Weather',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        },
        {
            id: 2,
            icon: faPlane,
            name: 'Best Flights',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        },
        {
            id: 3,
            icon: faMusic,
            name: 'Local Events',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        },
        {
            id: 4,
            icon: faHeadphonesSimple,
            name: 'Super Service',
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nisi, fringilla nec condimentum nec, condimentum a eros."
        }
    ]

    return (
        <section>
            <h1 className="head">Why us</h1>
            {cards.map(card => <WhyCards key={card.id} {...card} />)}
        </section>
    );
}

export default SectionWhy;