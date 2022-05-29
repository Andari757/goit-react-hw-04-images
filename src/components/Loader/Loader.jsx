import styles from "./styles.module.css"
import { SpinnerInfinity } from 'spinners-react';
export default function Loader() {
    return (
        <div className={styles.spinner}> < SpinnerInfinity enabled={true} size={150} /></div >

    )

}