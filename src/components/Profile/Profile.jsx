import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";


export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ashish.</h1>
          <p className={styles.description}>I'm a Full Stack Developer using React and Node.JS, currently i am styding at NMAMIT, NITTE</p>
          <a href="mailto:ashishshetty139@gmail.com"  className={styles.contactBtn}>
            Contact Me
          </a>
      </div>
      <img 
        src={getImageUrl("profile/profileImage.png")} 
        alt="Profile image of me"  
        className={styles.profileImg}
      />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};
