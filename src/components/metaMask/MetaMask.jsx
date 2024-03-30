import React, { useState } from 'react';
import Web3 from 'web3';

const MetaMask = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                accountChanged(accounts);
                fetchUserBalance(web3, accounts[0]);
            } catch (error) {
                setErrorMessage(error.message || 'Error connecting wallet');
            }
        } else {
            setErrorMessage('Install MetaMask');
        }
    };

    const accountChanged = (accounts) => {
        setDefaultAccount(accounts[0]);
    };

    const fetchUserBalance = async (web3, account) => {
        try {
            const balance = await web3.eth.getBalance(account);
            setUserBalance(web3.utils.fromWei(balance, 'ether'));
        } catch (error) {
            console.error('Error fetching user balance:', error);
        }
    };

    return (
        <main>
            <h2>MetaMask connection</h2>
            <button onClick={connectWallet}>Connect Wallet</button>
            <h3>Address: {defaultAccount}</h3>
            <h3>Balance: {userBalance} ETH</h3>
            {errorMessage && <p>{errorMessage}</p>}
        </main>
    );
};

export default MetaMask;
