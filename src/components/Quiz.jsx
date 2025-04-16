import React, { useState } from "react";
import { useEffect } from "react";
import Question from "./Question";
import Button from "./Button";
import styles from "./quiz.module.css";
import { useMyState } from "../StateProvider";

export default function Quiz({ changeQstn, setScore, endQuiz }) {
  const { state } = useMyState();

  const { questions, isRunning, timer, curQuestion, isCorrect } = state;

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
