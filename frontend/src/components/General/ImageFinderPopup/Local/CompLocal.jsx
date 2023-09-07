import axios from "axios"
import { useEffect, useState } from "react"
import "./CompLocal.scss"

function CompLocal({ setSelectedPath }) {
  const [images, setImages] = useState([])
  /* Faire un .env front? */
  const backendBaseUrl = "http://localhost:4242"

  const handleClick = (imageId) => {
    setSelectedPath(imageId)
    // console.log(imageId)
  }

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/displayAllPictures`)
      .then((response) => {
        const imageNames = response.data.files
        // console.log("récupération des images : ", imageNames)
        setImages(imageNames)
      })
      .catch((error) => {
        console.error(
          "Une erreur est survenue lors de la récupération des fichiers.",
          error
        )
      })
  }, [])

  return (
    <div className="gallery">
      {images[0] &&
        images[0].map((image) => (
          <div key={image.id} className="gallery__image">
            <button
              key={image.id}
              type="button"
              onClick={() => handleClick(image.file_path)}
              className="btn-img"
            >
              <img
                src={`http://localhost:4242/uploads/${image.file_path}`}
                alt={`Image ${image.id}`}
              />
            </button>
          </div>
        ))}
    </div>
  )
}
export default CompLocal
