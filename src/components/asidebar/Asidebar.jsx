import React,{useState} from "react";
import "./aside.scss";
import { NavLink } from "react-router-dom";
import {useShow} from '../../contextAPI/Context'

const Asidebar = () => {
  const {isShow, setIsShow} = useShow();

  
  return (
    <>
    {
      isShow && <aside>
      <div className="above">
        <h1>Carbon Cell</h1>
        <i class="fa-regular fa-circle-xmark" onClick={() => setIsShow(false)}></i>
      </div>
      <div className="lists">
        <NavLink
          to="/"
          className={`list_item ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/population"
          className={`list_item ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-users"></i>
          <span>Population</span>
        </NavLink>
        <NavLink
          to="/currency"
          className={`list_item ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-bitcoin-sign"></i>
          <span>Currency</span>
        </NavLink>
        <NavLink
          to="/wallet"
          className={`list_item ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-wallet"></i>
          <span>Wallet</span>
        </NavLink>
      </div>
    </aside>
    }
    </>
    
  );
};

export default Asidebar;
