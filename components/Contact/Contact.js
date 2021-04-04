import styles from "./Contact.module.css";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [resultMessage, setResultMessage] = useState();

  const contactForm = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/contactUs", {
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      setResultMessage("Success! Your message has been sent!");
    } catch {
      setResultMessage(
        "An error occurred while sending your message. Please try again later or contact ibo.f@hotmail.com"
      );
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="Contact" className={styles.wrapper}>
      <h2>Contact</h2>
      <p>Feel free to contact me for your questions you might have.</p>
      <form onSubmit={contactForm}>
        <label id={styles.name}>
          <h3>Name</h3>
          <input
            type="text"
            value={name || ""}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Name"
            required
          />
        </label>
        <label id={styles.email}>
          <h3>Email</h3>
          <input
            type="email"
            value={email || ""}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Email Address"
            required
          />
        </label>
        <label id={styles.message}>
          <h3>Message</h3>
          <input
            type="text"
            value={message || ""}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Enter Message"
            required
          />
        </label>
        <button id={styles.button} type="submit">
          Submit
        </button>
      </form>
      <p className={styles.disclaimer}>
        ** By submitting this form you agree to share your name and email which
        may be considered as personally identifiable information with Ibrahim
        Firat. **
      </p>
      {resultMessage && <p className={styles.resultMessage}>{resultMessage}</p>}
    </div>
  );
};

export default Contact;
