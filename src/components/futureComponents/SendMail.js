import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import MailSent from "./MailSent";
import "./SendMail.css";
import { useLocation } from "react-router-dom";
import Animate from "../features/Animate";

export const ContactUs = () => {
  const form = useRef();
  const testRef = useRef(null);
  const { pathname } = useLocation();
  const [sent, setSent] = useState(false);

  function scrollToContactMe() {
    if (pathname == "/future/contact-me") {
      testRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => scrollToContactMe(), [pathname]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_joeqp6m",
        "template_mxmg59e",
        form.current,
        "25mm2_VnVBcMW2uc6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setTimeout(function () {
            setSent(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="big-contact-container">
      <div className="contact-container">
        <Animate variant={3}>
          <div ref={testRef} id="contactSection" className="login-box">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="user-box">
                <input
                  id="subject"
                  type="text"
                  name="subject" /* placeholder="Subject" */
                  required
                />
                <label htmlFor="subject">SUBJECT</label>
              </div>
              <div className="user-box">
                <input id="name" type="text" name="name" required />
                <label htmlFor="name">NAME</label>
              </div>
              <div className="user-box">
                <input
                  id="email"
                  type="text"
                  name="email" /* placeholder="Mail" */
                  required
                />
                <label htmlFor="email">MAIL</label>
              </div>
              <div className="user-box">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  rows="10"
                  required
                />
                <label htmlFor="message">WHAT CAN I DO FOR YOU?</label>
              </div>
              <div className="formButton-container">
                <button
                  className="formButton"
                  id="send"
                  type="submit"
                  value="Send"
                >
                  {" "}
                  SEND <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </Animate>
      </div>
      {sent ? <MailSent /> : ""}
    </div>
  );
};
