import PropTypes from 'prop-types';
import styles from "./styles.module.css"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
export default function ImageGallery({ items, onClick }) {
    return (
        < ul className={styles.imageGallery} >
            {items.map(item => (<ImageGalleryItem
                key={item.id}
                item={item}
                onClick={onClick}
            />))}

        </ul >
    )
}
ImageGallery.defaultProps = {
    items: [],
    onClick: function () { }
}
ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string
    }))
}