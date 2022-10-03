import "./App.css";
import Futer from "./Components/Futer";
// import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRouts";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Futer />
    </div>
  );
}

export default App;
