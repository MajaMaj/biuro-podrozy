import SectionWhy from "./SectionWhy/SectionWhy";
import SectionGallery from "./SectionGallery/SectionGallery";
import SectionAbousUs from "./SectionAboutUs/SectionAboutUs";
import SectionContact from "./SectionContact/SectionContact";

function Sections(props) {

    return (
        <div>
            <SectionWhy></SectionWhy>
            <SectionGallery></SectionGallery>
            <SectionAbousUs></SectionAbousUs>
            <SectionContact></SectionContact>
        </div>
    );
}

export default Sections;