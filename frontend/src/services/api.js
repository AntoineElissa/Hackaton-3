import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:4242",
})
export default api
