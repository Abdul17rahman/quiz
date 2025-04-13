export default function reducer(state, action) {
  switch (action.type) {
    case "setQuestion":
      return { ...state, questions: action.payload };
    case "start":
      return { ...state, hasStarted: true, isRunning: true };
    case "tick":
      return { ...state, timer: state.timer - 1 };
    case "finish":
      return { ...state, timer: 0 };
    case "changeQstn":
      if (state.curQuestion + 1 >= state.questions.length) {
        return { ...state, isRunning: false, isDone: true, hasStarted: false };
      }
      return { ...state, curQuestion: state.curQuestion + 1, timer: 420 };
    case "changeScore":
      return { ...state, score: state.score + action.payload };
    case "endQuiz":
      return { ...state, isRunning: false, isDone: true, hasStarted: false };
    default:
      throw new Error("Unkown Action");
  }
}
