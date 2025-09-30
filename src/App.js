import "./App.css";
import MovieContainer from "./components/MovieContainer";
import bgImage from "./images/bg-cinematography.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})` }}>
      <MovieContainer />
    </div>
  );
}

export default App;
