import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import CardGrid from "./components/CardGrid";
import AboutPage from "./pages/AboutPage";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <CardGrid /> */}
        <Route path="/" element={<HomePage />}>
          <Route path=":category" element={<CardGrid />}></Route>
        </Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/collaborators" element={<CollaboratorsPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
