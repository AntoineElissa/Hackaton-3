import "./CompUpload.scss"
import { useState, useEffect } from "react"
import axios from "axios"

import imgImport from "../../../../../assets/user_ui/import.png"
import ButtonUI from "../../../Buttons/ButtonUI"

function CompUpload({ onClickCancel, setSelectedPath }) {
  const [success, setSuccess] = useState("")

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    setSuccess("")
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  const handleImport = async () => {
    if (selectedFile) {
      // setLoading(true) // Début du chargement
      const formData = new FormData()
      formData.append("image", selectedFile)

      try {
        const response = await axios.post(
          `http://localhost:4242/addPicture/${selectedFile.name}`,
          formData
        )
        // alert(response.data.fileName)
        // setImageUrl(response.data.fileName)
        setSuccess("success !")
        setSelectedPath(response.data.filename)
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'image :", error)
        setSuccess("error... try again")
      } finally {
        // Fin du chargement, quelle que soit la réponse
      }
    }
  }

  return (
    <div className="CompUpload">
      <div className="CompUpload__import">
        <h4> Select a picture from files </h4>
        <div className="file-input">
          <input
            type="file"
            name="image"
            id="file-input"
            className="file-input__input"
            onChange={onSelectFile}
          />
          <label htmlFor="file-input" className="file-input__label">
            <img src={imgImport} alt="Preview" />
            <span>Upload file</span>
          </label>
        </div>
      </div>
      {selectedFile && (
        <div className="CompUpload__imgPreview">
          <div className="CompUpload__wrap-imgPreview">
            <img src={preview} alt="img-uploaded" className="imgPreview" />
          </div>
          <p className="CompUpload__success"> {success} </p>
          {!success && (
            <div className="CompUpload__UploadButtons">
              <ButtonUI
                title={"import"}
                bgcolor={"#3f7841"}
                onClick={handleImport}
              />
              <ButtonUI
                title={"cancel"}
                bgcolor={"#902B00"}
                onClick={onClickCancel}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CompUpload
