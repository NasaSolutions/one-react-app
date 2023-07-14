import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <h2>
          <strong>Weather Search By Chinasa</strong>
        </h2>
        <Weather />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/chinasa-iweajunwa-83a0a6178/"
            target="blank"
          >
            Chinasa Emmanuel
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NasaSolutions/one-react-app"
            target="blank"
          >
            Open Sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
