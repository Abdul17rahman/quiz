import React from "react";
import styles from "./question.module.css";

export default function Question({
  question,
  setScore,
  changeQstn,
  setIsClicked,
}) {
  function checkAns(idx) {
    setIsClicked(true);
    changeQstn();
    if (idx === question.correctOption) {
      setScore(question.points);
    } else {
      setScore(0);
    }
  }
  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((ans, idx) => (
          <li key={idx} onClick={() => checkAns(idx)} className={styles.answer}>
            {ans}
          </li>
        ))}
      </ul>
    </div>
  );
}
