import "./App.css";
import AboutComp from "./components/about/About";
import About from "./pages/About";
import Final from "./pages/Final";

import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import Client from "./sections/Client";

function App() {
  return (
    <div className="  bg-white w-full">
      <Home />
      <QuestionPage />

      <Client />
      <AboutComp />
      <Final />
    </div>
  );
}

export default App;
