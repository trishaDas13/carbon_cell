import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Chart from "../../components/chart/Chart";
import Card from "../../components/cards/Card";
import FollowUs from "../../components/followUs/FollowUs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <section className="home_main animate__animated animate__fadeInRight">
        <h2>Population Data</h2>
        {/* <hr /> */}
        <div className="population">
          <Chart/> 
          <FollowUs/>
        </div>
      </section>
      <section className="home_main animate__animated animate__fadeInRight">
       <div className="cryptoHeadHome">
       <h2>Cryptocurrency Prices</h2>
        <Link to="/currency">Explore more <i class="fa-solid fa-angles-right"></i> </Link>
       </div>
        <div className="population">
          <Card/> 
        </div>
      </section>
    </main>
  );
};

export default Home;
