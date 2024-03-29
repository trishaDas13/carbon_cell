import React, { useState, useEffect } from "react";
import axios from "axios";
import './card.scss';

const Card = () => {
  const [data, setData] = useState([]);
  //todo: Get data from API
  const fetchData = async () => {
    try {
      let res = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      setData(res.data);
    } catch (error) {
      console.log("error from currency: ", error);
    }
  };

  //todo: genarate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bitcoin">
      <div className="header">
        <h1>{data?.chartName}</h1>
        <p>disclaimer: {data?.disclaimer}</p>
      </div>
      <div className="timing">
       {data?.time?.updated}
      </div>
      <div className="cardsect">
      {data?.bpi &&
        Object.entries(data?.bpi).map((item, i) => {
          let value = item[1];
          let randomColor = getRandomColor();
          return (
            <div className="cards" key={i}>
              <div className="top">
                <div className="color"
                style={{backgroundColor: randomColor}}></div>
                <h3>{value.code}</h3>
              </div>
              <p className="desc">{value.description}</p>
              <div className="currencies">
              <h4 className="rate"  style={{backgroundColor: randomColor}}>{value.rate_float.toLocaleString("en-US", { style: 'currency', currency: 'INR' })}</h4>
                <h4 className="rate"  style={{backgroundColor: randomColor}}>{((value.rate_float)*0.012).toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</h4>
                <h4 className="rate"  style={{backgroundColor: randomColor}}>{((value.rate_float)*0.011).toLocaleString("en-US", { style: 'currency', currency: 'EUR' })}</h4>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
