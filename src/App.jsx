import ImageGallery from "components/ImageGallery/ImageGallery"
import Button from "components/Button/Button";
import Searchbar from "components/Searchbar/Searchbar";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import { useState, useEffect } from "react";
const axios = require('axios').default;
export default function App() {
  const [page, setPage] = useState(1)
  const [key, setKey] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])
  const [modal, setModal] = useState({ appearance: false, modalContent: {} })

  useEffect(() => {
    if (!key) return
    setLoading(true);
    setError(null)
    try {
      async function getData() {
        const response = await axios.get(`https://pixabay.com/api/?q=${key}&page=${page}&key=27028263-30a4c0e676d46eddbf4883679&image_type=photo&orientation=horizontal&per_page=12`)
        if (page === 1) setItems(response.data.hits)
        else setItems((prev) => [...prev, ...response.data.hits])
        setLoading(false);
      }
      getData()
    } catch (e) {
      setError(e)
      setLoading(false);
      alert(error)
    }
  }, [key, page, error])

  const showModal = (url, tags) => {
    setModal({
      appearance: true,
      modalContent: { url: url, tags: tags }
    })
  }
  const closeModal = () => {
    setModal({
      appearance: false
    })
  }
  const loadMore = () => {
    setPage((prev) => prev + 1)
  }
  const setQuery = (data) => {
    setKey(data)
    setPage(1)
  }

  return (
    <div >
      <Searchbar
        onSubmit={setQuery} />
      {Boolean(items.length) && <ImageGallery
        items={items} onClick={showModal} />}
      {Boolean(items.length) && !loading && <Button onClick={loadMore} text={"Load more"} />}
      {loading && <Loader boolean={loading} />}
      {modal.appearance && <Modal
        close={closeModal}
        children={< img src={modal.modalContent.url} alt={modal.modalContent.tags} />} />

      }
    </div >
  )

};
