import React from "react";
import styles from "./main.module.css";
import Button from "./Button";

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      {children}
      <Button value="Begin" />
    </main>
  );
}
