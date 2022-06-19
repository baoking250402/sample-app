import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Private from "./Private.js";
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state) => state.account);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/private" element={<Private />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
