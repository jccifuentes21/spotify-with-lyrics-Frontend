import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");
const state = new URLSearchParams(window.location.search).get("state");

const App = () => {
  return code ? <Dashboard code={code} state={state} /> : <Login />;
};

export default App;
