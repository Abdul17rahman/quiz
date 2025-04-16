import React, { useEffect } from "react";
import styles from "./main.module.css";
import Button from "./Button";
import Quiz from "./Quiz";
import { useMyState } from "../StateProvider";

export default function Main({ children }) {
  const { state, dispatch } = useMyState();
  const {
    questions,
    hasStarted,
    isRunning,
    timer,
    curQuestion,
    isDone,
    score,
    isCorrect,
  } = state;

  function startGame() {
    dispatch({ type: "start" });
  }

  function endQuiz() {
    dispatch({ type: "endQuiz" });
  }

  function changeQstn() {
    if (curQuestion < questions.length) {
      dispatch({ type: "changeQstn" });
    }
  }

  function changeScore(score) {
    dispatch({ type: "changeScore", payload: score });
  }

  useEffect(
    function () {
      let timing;

      if (isRunning && timer > 0) {
        timing = setInterval(() => {
          dispatch({ type: "tick" });
        }, 1000);
      }

      if (timer === 0) {
        dispatch({ type: "finish" });
      }

      return () => clearInterval(timing);
    },
    [isRunning, timer]
  );

  useEffect(() => {
    if (timer == 0 && curQuestion < questions.length) {
      dispatch({ type: "changeQstn" });
    }
  }, [timer]);

  return (
    <main className={styles.main}>
      {children}
      {hasStarted ? (
        <>
          <h5>Your score is {score}</h5>
          <Quiz
            changeQstn={changeQstn}
            setScore={changeScore}
            endQuiz={endQuiz}
          />
        </>
      ) : isDone ? (
        <h1>Thank you for completing this quiz, Your score is {state.score}</h1>
      ) : (
        <Button value="Begin" onClick={startGame} />
      )}
    </main>
  );
}
