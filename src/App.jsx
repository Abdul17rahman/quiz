import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import reducer from "./reducers/reducer";

const initialState = {
  questions: [],
  time: "30min",
  timer: 420,
  curQuestion: 0,
  score: 0,
  isDone: false,
  hasStarted: false,
  isRunning: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    <>
      <Header />
      <Main state={state} dispatch={dispatch}>
        {!state.isDone && (
          <>
            <h2>Welcome to the ultimate school quiz.</h2>
            <p>You have {state.questions.length} questions to Answer.</p>
          </>
        )}
      </Main>
    </>
  );
}

export default App;
