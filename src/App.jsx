import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
