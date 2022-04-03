function GalleryCard(props) {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <p>{props.describe}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default GalleryCard;