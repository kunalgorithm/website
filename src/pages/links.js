import React from "react"

import { Redirect } from "@reach/router"

export default ({}) => {
  if (typeof window !== `undefined`) window.location.replace(`/posts/links`)
  return <Redirect to="/posts/links" />
}
