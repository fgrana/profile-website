import React, { FC, FormEvent, useRef } from "react";
import contact from "./Contact.module.css";
import { Button } from "react-bootstrap";
import emailjs, { send } from "@emailjs/browser";
import Footer from "../containers/Footer";

type Props = {};

const PUBLIC_KEY = "wG-0wRe_xTDPB1gB9";
const SERVICE_ID = "service_a5rd5l8";
const TEMPLATE_ID = "template_8ht62df";

// npm i @emailjs/browser

const Contact = () => {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });

  window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;

    form?.addEventListener("submit", function (event: Event) {
      event.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
        () => {
          console.log("Mail send!");
        },
        (error) => {
          console.log("mail failed!", error);
        }
      );
    });
  });

  return (
    <>
      <div className={contact.body}>
        <div className={contact.wrapper}>
          <h1>Contact</h1>
          <form id="contact-form">
            <div className="mb-3">
              <label className="form-label" htmlFor="from_name">
                First name:
              </label>
              <br></br>
              <input
                className="form-control"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <br></br>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="lname">
                First name:
              </label>
              <br></br>
              <input
                className="form-control"
                type="text"
                id="lname"
                name="lname"
              ></input>
              <br></br>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="emial">
                Email:
              </label>
              <br></br>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
              ></input>
              <br></br>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Messange:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={3}
              ></textarea>
            </div>

            <input
              className="btn btn-primary mb-3"
              type="submit"
              value="Send"
            />
          </form>
          <br></br>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
