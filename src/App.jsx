import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/qualifications/Qualification";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollUp/ScrollUp";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
