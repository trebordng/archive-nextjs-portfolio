import React, { useRef, useState } from "react";
import Reveal from "react-reveal/Reveal";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  if (result === true) {
    setTimeout(() => {
      showResult(false);
    }, 3000);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oi0y69p",
        "template_jlptrno",
        "#contact-form",
        "user_srO7b3Harhxzqldgwf5Xl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <div id="contact">
      <Reveal>
        <h5 className="contact-title">Let&apos;s Talk!</h5>

        <form
          className="form"
          ref={form}
          onSubmit={sendEmail}
          id="contact-form"
        >
          <div className="user">
            <input
              className="user-detail"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />

            <input
              className="user-detail"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>

          <div className="user-message-wrapper">
            <textarea
              className="user-message"
              name="message"
              placeholder="Message"
              required
            />
          </div>
          <div className="send-button-wrapper">
            <button
              className="sendButton normal-button"
              type="submit"
              value="Send"
            >
              Send
            </button>
          </div>
          <p className="or">
            <em>Or</em>
          </p>
          <div className="contact-detail">
            <div className="row">
              <div className="col-lg-6 ">
                <a href="mailto: rtran.nvtt@gmail.com">
                  <strong>email:</strong> rtran.nvtt@gmail.com
                </a>
              </div>
              <div className="col-lg-6 ">
                <a
                  href="https://www.linkedin.com/in/robert-tran-a49b251a4/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>linkedIn:</strong>
                  linkedin.com/in/robert-tran-a49b251a4
                </a>
              </div>
            </div>
          </div>
          {result ? (
            <div className="success-message fade-in">
              <p>Your message has been succesfully sent.</p>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
          ) : null}
        </form>
      </Reveal>
    </div>
  );
};

export default Contact;
