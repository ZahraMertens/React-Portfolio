import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="row justify-content-center footerContent">
          <div className="col">
            <h1 className="FooterHeader">Contact</h1>
          </div>
        </div>
        <div className="row justify-content-center footerContent">
          <div className="col">
            <a href="https://www.linkedin.com/in/zahra-marie-mertens-0399771a3/">
              <FaLinkedin size={42} className="footer-icon" />
            </a>
            <a href="mailto:mertens.zahra@gmail.com">
              <FaEnvelope size={42} className="footer-icon" />
            </a>
            <a href="https://github.com/ZahraMertens">
              <FaGithub size={42} className="footer-icon" />
            </a>
          </div>
        </div>
        <div className="row justify-content-center footerContent">
          <div className="col">
            <p className="FooterCopy">Copyright © 2021 - Zahra Mertens</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
