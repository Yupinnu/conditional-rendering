import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// const currentTime = new Date(2021, 6, 22, 21).getHours();
// console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* {currentTime > 9 && <h1>Why are you still working?</h1>} */}
    </div>
  );
}

export default App;
