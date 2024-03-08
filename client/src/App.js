import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from "./components/Chats/Chats";
import Home from "./components/Home/Home";
import "./App.css";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
