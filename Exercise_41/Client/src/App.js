import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import LineChart from "./components/LineChart";

function App() {
  const { data } = useSelector((s) => s);

  return <LineChart data={data} />;
}

export default App;
