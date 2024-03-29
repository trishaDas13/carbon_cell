import React, { useState } from "react";
import "./home.scss";

const Home = () => {
  const [name, setName] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setName(e.target.value);
    }
  };

  return (
    <main>
      <header>
        <div className="heading">
          <i className="fa-solid fa-bars"></i>
          <div className="intro">
            <p>
              Hello,{" "}
              {name ? (
                <span>{name}</span>
              ) : (
                <input
                  type="text"
                  onKeyDown={handleKeyDown}
                  placeholder="Type your name and press Enter"
                />
              )}
            </p>
            <p>
              Welcome to, <span>carbon Cell</span>
            </p>
          </div>
        </div>
        <button>Connect Wallet</button>
      </header>
    </main>
  );
};

export default Home;
