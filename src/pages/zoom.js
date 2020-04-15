import React from "react"

export default ({}) => {
  if (typeof window !== `undefined`)
    window.location.replace(`https://zoom.us/j/7865414444`)
  return <div>You should be redirected... </div>
}
