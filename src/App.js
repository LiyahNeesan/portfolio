import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Description from "./components/Description";
import Projects from "./components/Projects";

function App() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <Description />
      <About />
      <Experience />
      <Projects />
      <Contacts modal={modal} setModal={setModal} handleModal={handleModal} />
      <Footer />
    </div>
  );
}

export default App;
