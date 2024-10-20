import { useState } from "react";
import contact from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Footer from "../containers/Footer";
import process from "process";

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

// npm i @emailjs/browser

const Contact = () => {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.log("keys not found");
    console.log("publickey" + PUBLIC_KEY);
  }
  const [alert, setalert] = useState(false);
  const [send, setSend] = useState(false);

  emailjs.init({
    publicKey: PUBLIC_KEY,
  });

  window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    form.addEventListener("submit", function (event: Event) {
      event.preventDefault();
      const email = form.querySelector<HTMLInputElement>(
        "input[name='email']"
      )?.value;
      const fname = form.querySelector<HTMLInputElement>(
        "input[name='fname']"
      )?.value;
      const lname = form.querySelector<HTMLInputElement>(
        "input[name='lname']"
      )?.value;
      const message = form.querySelector<HTMLTextAreaElement>(
        "textarea[name='message']"
      )?.value;

      if (!email || !fname || !lname || !message) {
        setalert(true);
      } else {
        console.log(email);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
          () => {
            console.log("Mail send!");
            setSend(true);
          },
          (error) => {
            console.log("mail failed!", error);
          }
        );
      }
    });
  });

  return (
    <>
      <div className={contact.body}>
        <div className={contact.wrapper}>
          <h1>Contact</h1>
          {alert ? (
            <div className="alert alert-warning" role="alert">
              All fields must be filled!
            </div>
          ) : (
            <></>
          )}

          {send ? (
            <div className="alert alert-success" role="alert">
              Email send!
            </div>
          ) : (
            <></>
          )}

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
              <label className="form-label" htmlFor="email">
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
