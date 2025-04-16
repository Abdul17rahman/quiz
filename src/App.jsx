import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./app.module.css";
import { useMyState } from "./StateProvider";

function App() {
  const { state, dispatch } = useMyState();

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "setQuestion", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Main>
        {!state.isDone && (
          <>
            <h2>Welcome to the ultimate school quiz.</h2>
            <p>You have {state.questions.length} questions to Answer.</p>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
