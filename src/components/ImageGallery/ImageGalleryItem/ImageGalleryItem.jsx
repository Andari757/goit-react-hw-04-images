import styles from "./styles.module.css"
export default function ImageGalleryItem({ item, onClick }) {
    return (
        <li className={styles.imageGalleryItem}>
            <img onClick={() => { onClick(item.largeImageURL, item.tags) }} className={styles.image} src={item.webformatURL} alt={item.tags} />
        </li>
    )
} 