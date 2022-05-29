import PropTypes from 'prop-types';
import { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./styles.module.css";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.closeModal)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal)
    }

    closeModal = (e) => {
        if (e.code === "Escape") {
            this.props.close();
            return;
        }
        if (e.target === e.currentTarget) {
            this.props.close();
        }
    }

    render() {
        return createPortal(
            <div className={styles.overlay} onClick={this.closeModal}>
                <div className={styles.modal}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot
        )
    }
}
Modal.defaultProps = {

    close: function () { }
}
Modal.propTypes = {
    close: PropTypes.func,

}

