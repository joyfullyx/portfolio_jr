import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Navigation />
        <Intro />
        <Projects />
        <br></br>
        <Contact />
      </Container>
    </div>
  );
}

export default App;
