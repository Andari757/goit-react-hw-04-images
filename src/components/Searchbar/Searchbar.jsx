import PropTypes from 'prop-types';
import { useState } from "react";
import styles from "./styles.module.css"
export default function Searchbar({ onSubmit }) {
    const [search, setSearch] = useState('')

    const handleChange = ({ target }) => {
        setSearch(
            target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
    }

    return (<header className={styles.searchBar}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <button type="submit" className={styles['searchForm-button']}>
                <span className={styles['searchForm-button-label']}>Search</span>
            </button>

            <input
                value={search}
                name="search"
                onChange={handleChange}
                className={styles['searchForm-input']}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>)
}

Searchbar.defaultProps = {
    onSubmit: function () { }
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}