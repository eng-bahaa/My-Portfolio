import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
