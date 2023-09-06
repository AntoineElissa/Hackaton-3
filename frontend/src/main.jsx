import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom" // Import correct

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
