import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ status, total, positive }) => (
    <div className={styles.feedback}>
      <h2>Feedback</h2>
      <p>Good: {status.good}</p>
      <p>Neutral: {status.neutral}</p>
      <p>Bad: {status.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
);


export default Feedback;
