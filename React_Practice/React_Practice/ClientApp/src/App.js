import React from "react";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./custom.css";

function App() {
  return (
    <div class="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
