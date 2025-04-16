import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducers/reducer";

const initialState = {
  questions: [],
  timer: 420,
  curQuestion: 0,
  score: 0,
  isDone: false,
  hasStarted: false,
  isRunning: false,
  isCorrect: false,
};

const myContext = createContext();

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </myContext.Provider>
  );
}

function useMyState() {
  const context = useContext(myContext);
  return context;
}

export { useMyState, StateProvider };
