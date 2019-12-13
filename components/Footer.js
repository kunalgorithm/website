import React from "react";
import { config } from "../config/config.yml";
import logo from "../static/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <Link href="/">
        <img
          src={logo}
          className="img-centered"
          alt="logo"
          style={{ height: "3rem", width: "3rem", marginBottom: "3rem" }}
        />
      </Link>
    </div>
  );
}
