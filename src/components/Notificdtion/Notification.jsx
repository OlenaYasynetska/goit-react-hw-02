import React from "react";
import styles from "./Notificdtion.module.css";

const Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);  

export default Notification;