import "./App.css";
import AboutComp from "./components/about/About";
import About from "./pages/About";
import Carousel from "./pages/Carousel";
import Corusel from "./pages/Corusel";
import Final from "./pages/Final";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import Client from "./sections/Client";

function App() {
  return (
    <div className="  bg-white w-full">
      <Home />
      <QuestionPage />
      <Corusel />
      <Client />
      <AboutComp />
      <Carousel />
      <Final />
      <Footer />
    </div>
  );
}

export default App;
