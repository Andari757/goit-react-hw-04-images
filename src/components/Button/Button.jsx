import PropTypes from 'prop-types';
import styles from "./styles.module.css"
export default function Button({ onClick, text }) {
    return (
        <button className={styles.button} type="button" onClick={onClick}>{text}</button>
    )
}
Button.defaultProps = {
    onClick: function () { }
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}