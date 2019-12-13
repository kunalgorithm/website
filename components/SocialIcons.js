import * as React from "react";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaMediumM,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

export default () => (
  <div>
    <style jsx>
      {`
        display: flex;
        flex-direction: row;
      `}
    </style>
    <a
      href="https://instagram.com/hi.kunal"
      target="blank"
      style={{
        borderBottom: "none"
      }}
    >
      <FaInstagram
        style={{
          marginRight: "1em"
        }}
      />
    </a>
    <a
      href="https://github.com/kunalgorithm"
      target="blank"
      style={{
        borderBottom: "none"
      }}
    >
      <FaGithub
        style={{
          marginRight: "1em"
        }}
      />
    </a>

    <a
      href="https://twitter.com/kunalsh22"
      target="blank"
      style={{
        borderBottom: "none"
      }}
    >
      <FaTwitter
        style={{
          marginRight: "1em"
        }}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/kunalsh22/"
      target="blank"
      style={{
        borderBottom: "none"
      }}
    >
      <FaLinkedinIn
        style={{
          marginRight: "1em"
        }}
      />
    </a>
  </div>
);
