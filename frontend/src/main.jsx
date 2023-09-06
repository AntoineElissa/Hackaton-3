import React from "react"

import { createRoot } from "react-dom/client"

import { BrowserRouter } from "react-router-dom" // Import correct

import App from "./App"

const root = createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
