import PropTypes from 'prop-types';
import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./styles.module.css";

const modalRoot = document.getElementById("modal-root");

export default function Modal({ children, close }) {
    useEffect(() => {
        window.addEventListener('keydown', closeModal);
        return () => window.removeEventListener('keydown', closeModal);
    });
    const closeModal = (e) => {
        if (e.code === "Escape") {
            close();
            return;
        }
        if (e.target === e.currentTarget) {
            close();
        }
    }


    return createPortal(
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>,
        modalRoot
    )

}
Modal.defaultProps = {

    close: function () { }
}
Modal.propTypes = {
    close: PropTypes.func,

}

