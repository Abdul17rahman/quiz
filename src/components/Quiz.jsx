import React, { useState } from "react";
import { useEffect } from "react";
import Question from "./Question";
import Button from "./Button";
import styles from "./quiz.module.css";

export default function Quiz({
  questions,
  isRunning,
  timer,
  curQuestion,
  changeQstn,
  endQuiz,
  setScore,
  isCorrect,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const current = questions[curQuestion];

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        endQuiz();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.quiz}>
      {isRunning && current && (
        <>
          <h5>
            Question: {curQuestion + 1} of {questions.length}
          </h5>
          <Question
            question={current}
            setScore={setScore}
            changeQstn={changeQstn}
            setIsClicked={setIsClicked}
          />
          <div className={styles.bottom}>
            <p>
              {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}s
            </p>
            {isClicked && <Button value="Next" onClick={changeQstn} />}
          </div>
        </>
      )}
    </div>
  );
}
