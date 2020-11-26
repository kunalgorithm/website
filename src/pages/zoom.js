import React from "react"
import Helmet from "react-helmet"
import { Row, Col } from "antd"

export default ({}) => {
  if (typeof window !== `undefined`)
    window.location.replace(
      `https://zoom.us/j/5962714465?pwd=MUxiSFBxOTNBS2I3OGl5NldZeDdJdz09`
    )
  return (
    <div>
      <Helmet title="Join My Personal Zoom Meeting"></Helmet>
      <Row align="middle" justify="center">
        <Col>You should be redirected...</Col>
      </Row>
    </div>
  )
}
