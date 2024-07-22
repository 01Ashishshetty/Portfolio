import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>
                Feel Free To Reach Out!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:ashishshetty139@gmail.com">ashishshetty139@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/ashish-shetty-aa4389279/">linkedin.com/ashish-shetty</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/01Ashishshetty">github.com/ashish-shetty</a>
            </li>
        </ul>
    </footer>
  );
};
