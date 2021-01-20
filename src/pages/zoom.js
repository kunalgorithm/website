import React from "react"
import Helmet from "react-helmet"

export default ({}) => {
  if (typeof window !== `undefined`)
    window.location.replace(
      `https://zoom.us/j/7865414444?pwd=VG5GeVIyaVE2VWhWUmI5RHZqbkFXdz09`
    )
  return (
    <div>
      <Helmet title="Join My Personal Zoom Meeting"></Helmet>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        You should be redirected...
      </div>
    </div>
  )
}
