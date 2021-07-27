import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import BarText from "./components/BarText";

export default function App() {
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 190],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);

  const [data, setData] = useState([
    {
      type: "bar",
      name: "Sales",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 190],
    },
  ]);

  const GenerateSeries = () => {
    const newSeries = [];
    series.map((s) => {
      const data = s.data.map(() => {
        return Math.round(Math.random() * (180 - Math.exp(Math.random())));
      });
      newSeries.push({ data, name: s.name });
    });
    setSeries(newSeries);
  };

  const GenerateData = () => {
    const newSeries = [];
    data.map((s) => {
      const data = s.data.map(() => {
        return Math.round(Math.random() * (180 - Math.exp(Math.random())));
      });
      newSeries.push({ data, name: s.name });
    });
    setData(newSeries);
  };

  return (
    <div className="container-test">
      <h1 style={{ border: "10px " }}>LineChart</h1>
      <LineChart series={series} />
      <BarChart series={data}></BarChart>
      <Button
        onClick={GenerateData}
        variant="secondary"
        style={{ margin: "5px" }}
      >
        Random
      </Button>
      <Button
        onClick={GenerateSeries}
        variant="secondary"
        style={{ margin: "5px" }}
      >
        Random
      </Button>
      <BarText />
    </div>
  );
}
