import React, { useState, useEffect } from "react";
import axios from "axios";
import "../cards/card.scss";

const Coins = () => {
  const [coinList, setCoinList] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const fetchCoins = async () => {
    const res = await axios.get("https://api.coinranking.com/v2/coins");
    setCoinList(res.data.data.coins);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <section className="bitcoin animate__animated animate__fadeInRight">
      {showCards && (
        <div className="cardsect">
          {coinList.map((item, i) => {
            return (
              <div className="cards" key={item.uuid}>
                <a
                  href={item.coinrankingUrl}
                  target="_blank"
                  className="coinrankingUrl"
                >
                  {" "}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div className="top">
                  <div className="color">
                    <img src={item.iconUrl} alt="coin's images" />
                  </div>
                  <h3>{item.symbol}</h3>
                </div>
                <p className="desc">{item.name}</p>
                <div className="currencies">
                  <h4
                    className="rate"
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h4>
                  <h4
                    className="rate"
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    {(item.price * 0.12).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h4>
                  <h4
                    className="rate"
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    {(item.price * 0.11).toLocaleString("en-US", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <button className="showCard" onClick={() => setShowCards(!showCards)}>
        {showCards ? "Collapse the coin list" : "Explore more Coins !!!"}
      </button>
    </section>
  );
};

export default Coins;
