import React from "react";
import "./follow.scss";
import logo from "../../assets/carboncell.jpeg";

const FollowUs = () => {
  return (
    <div className="follow">
      <p className="follow_head">In recent posts</p>
      <hr />
      <div className="post">
        <div className="post_info">
          <img src={logo} alt="logo" />
          <div className="co_info">
            <h4>
              Carbon Cell <span>@carboncell</span>
            </h4>
            <p>
              Carbon Cell: Pioneering Financial Solutions for a Greener Future!
              🌏🌱
            </p>
          </div>
          
        </div>
        <div className="post_feed">
            <p>
              Read more:
             <a href=" https://carboncell.medium.com/introducing-carbon-cell-d8b9dc18b6c7" target="_blank"> https://carboncell.medium.com/introducing-carbon-cell-d8b9dc18b6c7</a><br /><br />
              In a world where decarbonization is paramount, Carbon Cell is
              leading the charge to redefine #CarbonMarkets. Follow this thread
              to learn how we’re making sustainable investments accessible and
              efficient.
            </p>
          </div>
          <div className="icon_group">
            <div className="post_icon">
            <i class="fa-regular fa-comment"></i>
            19
            </div>
            <div className="post_icon">
            <i class="fa-solid fa-retweet"></i>
            48
            </div>
            <div className="post_icon">
            <i class="fa-regular fa-heart"></i>
            482
            </div>
            <div className="post_icon">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            36
            </div>
          </div>
      </div>
      <hr />
      <a href="https://twitter.com/carbon_cell/status/1705239267398795716" id="followbtn" target="_blank">Follow us on X </a>
    </div>
  );
};

export default FollowUs;
