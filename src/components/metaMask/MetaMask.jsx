import React, { useState } from "react";
import Web3 from "web3";
import logo from "../../assets/logo.svg";
import "./meta.scss";

const MetaMask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        accountChanged(accounts);
        fetchUserBalance(web3, accounts[0]);
      } catch (error) {
        setErrorMessage(error.message || "Error connecting wallet");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChanged = (accounts) => {
    setDefaultAccount(accounts[0]);
  };

  const fetchUserBalance = async (web3, account) => {
    try {
      const balance = await web3.eth.getBalance(account);
      setUserBalance(web3.utils.fromWei(balance, "ether"));
    } catch (error) {
      console.error("Error fetching user balance:", error);
    }
  };

  return (
    <main>
      <div className="metaBox animate__animated animate__fadeInRight">
        <h1>
          Connect with <span>MetaMask!</span>
        </h1>
        <div className="image">
          <img src={logo} alt="Metamask logo" />
        </div>
        <button onClick={connectWallet}>
          {defaultAccount ? "Connected!" : "Connect Wallet!"}
        </button>
        {errorMessage ? (
          <p className="error">Please Install and create an account in Metamask </p>
        ) : (
          <div className="metaInfo">
            {defaultAccount && (
              <p>
                Address: <span title="Click to copy">{defaultAccount}</span>
              </p>
            )}
            {userBalance && (
              <p>
                Balance: <span>{userBalance} ETH</span>
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default MetaMask;
