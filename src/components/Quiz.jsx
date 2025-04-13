import React from "react";
import { useEffect } from "react";
import Question from "./Question";
import Button from "./Button";

export default function Quiz({
  questions,
  isRunning,
  timer,
  curQuestion,
  changeQstn,
  endQuiz,
  setScore,
}) {
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
    <div>
      {isRunning && current && (
        <>
          <h4>
            Question: {curQuestion + 1} of {questions.length}
          </h4>
          <Question
            question={current}
            setScore={setScore}
            changeQstn={changeQstn}
          />
          <p>
            Time remainig: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, "0")}s
          </p>
          <Button value="Next" onClick={changeQstn} />
        </>
      )}
    </div>
  );
}
