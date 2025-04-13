import React from "react";

export default function Question({ question, setScore, changeQstn }) {
  function checkAns(idx) {
    changeQstn();
    if (idx === question.correctOption) {
      setScore(question.points);
    } else {
      setScore(0);
    }
  }
  return (
    <div>
      <h1>{question.question}</h1>
      <ul>
        {question.options.map((ans, idx) => (
          <li key={idx} onClick={() => checkAns(idx)}>
            {ans}
          </li>
        ))}
      </ul>
    </div>
  );
}
