import { useState } from "react"

import "./PopupImgFinder.scss"

import imgQuit from "../../../../assets/user_ui/quit_white.png"
import CompUpload from "./Download/CompUpload"
import CompWebSearch from "./WebSearch/compWebSearch"
import CompLocal from "./Local/CompLocal"

function PopupImgFinder({
  setViewImgFinder,
  onClickCancel,
  setSelectedPath,
  selectedPath,
}) {
  const [viewState, setView] = useState("local")

  return (
    <div className="popupFinder">
      <div className="popupFinderToolbar">
        <div className="popupFinderToolbar__menu">
          <ul className="popupFinderToolbar__list">
            <li
              onClick={() => setView("local")}
              className={viewState === "local" ? "actif" : "unselected"}
            >
              Local
            </li>
            <li
              onClick={() => setView("upload")}
              className={viewState === "upload" ? "actif" : "unselected"}
            >
              Upload
            </li>
            <li
              onClick={() => setView("websearch")}
              className={viewState === "websearch" ? "actif" : "unselected"}
            >
              Web search
            </li>
          </ul>
          <div className="popupFinderToolbar__buttonsFinder">
            <button className="btnQuit" onClick={() => setViewImgFinder(false)}>
              <img src={imgQuit} alt="imgQuit" className="imgQuit" />
            </button>
          </div>
        </div>
      </div>

      <div className="popupFinderContent">
        {viewState === "local" && (
          <CompLocal setSelectedPath={setSelectedPath} />
        )}
        {viewState === "upload" && (
          <CompUpload
            setSelectedPath={setSelectedPath}
            onClickCancel={() => setViewImgFinder(false)}
          />
        )}
        {viewState === "webSearch" && <CompWebSearch />}
      </div>
    </div>
  )
}

export default PopupImgFinder
