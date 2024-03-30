import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import {useShow} from '../../contextAPI/Context'

const Header = () => {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const {isShow, setIsShow} = useShow();
  
  //todo: save the name in local storage
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const enteredName = e.target.value;
      setName(enteredName);
      localStorage.setItem("name", enteredName);
    }
  };
  
  //todo: showing the name when mount
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  //todo: render header element
  return (
    <header>
      <div className="heading">
      {isShow ? null : (
          <i className="fa-solid fa-bars" onClick={() => setIsShow(true)}></i>
        )}
        <div className="intro">
          <p className="first">
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
          <p className="second">
            Welcome to, <span>Carbon Cell !</span>
          </p>
        </div>
      </div>
      <Link to="/wallet">Go To Wallet</Link>
    </header>
  );
};

export default Header;
