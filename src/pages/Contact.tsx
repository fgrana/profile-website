import { useState } from "react";
import contact from "./Contact.module.css";
import Footer from "../containers/Footer";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {

  console.log(PUBLIC_KEY)

  const [alert, setalert] = useState(false);
  const [send, setSend] = useState(false);
  const [emailjsResponse, setEmailjsResponse] = useState();

  
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
            const fetchEmailjs = async () => {
              const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                  method: 'POST',
                  headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-type": "application/json; charset=UTF-8",
                      mode: 'cors'
                  },
                  body: JSON.stringify({
                      user_id: PUBLIC_KEY,
                      service_id: SERVICE_ID,
                      template_id: TEMPLATE_ID,
                      template_params: {
                          'fname': fname,
                          'lname': lname,
                          'email': email,
                          'message': message,
                          // Add more parameters as needed
                      }
                  })
              });
              
              const emailjsResponse = await response.json();
              if(response.ok){
                console.log("Mail send!");
              }
              setEmailjsResponse(emailjsResponse);
              
          };
          fetchEmailjs()
      
          console.log(emailjsResponse)
          setSend(true);
        
      }});
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
