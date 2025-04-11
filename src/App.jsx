import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import reducer from "./reducers/reducer";

function App() {
  const { state, dipatch } = useReducer(reducer);

  useEffect(function () {
    try {
      fetch("http://localhost:8000/questions")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <h3>Welcome to the ultimate school quiz.</h3>
        <p>1/10 questions</p>
      </Main>
    </>
  );
}

export default App;
