import "./App.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Resume from "./components/resume";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
