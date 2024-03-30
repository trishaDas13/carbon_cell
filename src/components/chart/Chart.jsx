import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./chart.scss";

const Chart = () => {
  const [population, setPopulation] = useState([]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  //todo: Get data from API
  const fetchData = async () => {
    try {
      let res = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      setPopulation(res.data.data);
    } catch (error) {
      console.log("error from currency: ", error);
    }
  };
  const years = population.map((item) => item.Year.toString()).reverse();
  const populationValues = population.map((item) => item.Population).reverse();

  const data = {
    labels: years,
    datasets: [
      {
        label: "Population Data",
        data: populationValues,
        borderColor: "rgb(42,176,42)",
        backgroundColor: "rgba(42,176,42, 0.5)",
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Population Data of United State",
        color: "#ffff",
        font: {
          size: 16,
          weight: "600",
          lineHeight: 1.2,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
          color: "#ffff",
          font: {
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
      y: {
        title: {
          display: true,
          text: "Population Data",
          color: "#ffff",
          font: {
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 20 },
        },
      },
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="charts">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
