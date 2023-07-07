import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import StickyDiv from "./StickyDiv";

// import Messages from "./Messages";

function App() {
  return (
    <>
      <StickyDiv />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
