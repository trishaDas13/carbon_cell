import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Chart from "../../components/chart/Chart";
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <main>
      <Header />
      <section className="home_main animate__animated animate__fadeInRight">
        <h2>Population Growth of U.S.</h2>
        <div className="population">
          <Chart/> 
        </div>
      </section>
      <section className="home_main animate__animated animate__fadeInRight">
        <h2>Cryptocurrency Prices</h2>
        <div className="population">
          <Card/> 
        </div>
      </section>
    </main>
  );
};

export default Home;
