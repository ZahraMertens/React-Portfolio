import React from 'react';
import Form from "./pageComponents/Form"
import "../../styles/Contact.css"
import { FaGithub, FaEnvelope, FaLinkedin} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contact-wrapper">
        <div className="row justify-content-center">
          <div className="contact-header-container">
            <div className="row justify-content-center">
              <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-6 col-8">
                <p className="contact-header">Contact</p>
              </div>
            </div>
          </div>
          <div className="form-container glass-container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
                <Form />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
                <div className="row justify-content-center">
                  <div className="col container-contact-icons">
                    <a href="https://www.linkedin.com/in/zahra-marie-mertens-0399771a3/">
                        <FaLinkedin size={42} className="contact-icon" /> 
                    </a>
                    <p>Zahra-Marie Mertens</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col container-contact-icons">
                    <a href="mailto:mertens.zahra@gmail.com">
                        <FaEnvelope size={42} className="contact-icon" />
                    </a>
                    <p>mertens.zahra@gmail.com</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col container-contact-icons">
                    <a href="https://github.com/ZahraMertens">
                        <FaGithub size={42} className="contact-icon" />
                    </a>
                    <p>Zahra Mertens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
