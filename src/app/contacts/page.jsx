import React from "react";
import styles from "./page.module.css";
const contacts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets connect</h1>
      <div className={styles.title}></div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img
            src="https://thumbs.dreamstime.com/z/avatar-afroamerican-girl-contact-us-information-service-vector-illustration-eps-81477753.jpg?w=992"
            alt="Contact.png"
            className={styles.img}
          />
        </div>
        <div className={styles.form}>
          <input
            type="text"
            className={styles.input}
            name="name"
            placeholder="name"
            id=""
          />
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="email"
            id=""
          />
          <textarea
            className={styles.textarea}
            name="message"
            id=""
            placeholder="Your message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default contacts;
