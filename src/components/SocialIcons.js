import * as React from "react"
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { css } from "@emotion/core"

export default () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <a
      href="https://instagram.com/hi.kunal"
      target="blank"
      rel="noopener noreferrer"
      style={{
        borderBottom: "none",
      }}
    >
      <FaInstagram
        style={{
          marginRight: "1em",
        }}
      />
    </a>
    <a
      href="https://github.com/kunalgorithm"
      target="blank"
      rel="noopener noreferrer"
      style={{
        borderBottom: "none",
      }}
    >
      <FaGithub
        style={{
          marginRight: "1em",
        }}
      />
    </a>

    <a
      href="https://twitter.com/kunalgorithm"
      target="blank"
      rel="noopener noreferrer"
      style={{
        borderBottom: "none",
      }}
    >
      <FaTwitter
        style={{
          marginRight: "1em",
        }}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/kunalsh22/"
      target="blank"
      rel="noopener noreferrer"
      style={{
        borderBottom: "none",
      }}
    >
      <FaLinkedinIn
        style={{
          marginRight: "1em",
        }}
      />
    </a>
  </div>
)
