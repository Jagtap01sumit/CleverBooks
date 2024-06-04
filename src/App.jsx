import "./App.css";

import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import Client from "./sections/Client";

function App() {
  return (
    <div className="  bg-white w-full">
      <Home />
      <QuestionPage />
      <Client />
    </div>
  );
}

export default App;
