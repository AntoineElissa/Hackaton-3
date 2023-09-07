// import { useEffect } from "react"

// function UserGeolocation({ onLocationChange }) {
//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords
//           onLocationChange({ latitude, longitude })
//         },
//         (error) => {
//           console.error("Geolocation error:", error)
//         }
//       )
//     } else {
//       console.error("Geolocation is not available in this browser")
//     }
//   }, [onLocationChange])

//   return null
// }

// export default UserGeolocation
