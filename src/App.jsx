import "./App.css";
import AboutComp from "./components/about/About";
import About from "./pages/About";

import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import Client from "./sections/Client";

function App() {
  return (
    <div className="  bg-white w-full">
      <Home />
      <QuestionPage />
      {/* <QuestionPage /> */}
      <Client />
      <AboutComp />
      {/* <Home /> */}
    </div>
  );
}

export default App;
