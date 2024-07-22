import React from "react";

import styles from "../Skills/Skills.module.css";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img 
                                    src={getImageUrl(historyItem.imageSrc)} 
                                    alt={`$(historyItem.organisation) logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h1>{`${historyItem.role}, ${historyItem.organisation}`}</h1>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experience.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}</ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
  );
};
