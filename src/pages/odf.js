import React from "react"

import { Redirect } from "@reach/router"

export default ({}) => {
  if (typeof window !== `undefined`) window.location.replace(`/posts/odf`)
  return <Redirect to="/posts/odf" />
}
