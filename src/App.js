

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ABI from './abiFile/ABI.json';
import Background from './Components/Background';


const App = () => {
  const [contract, setContract] = useState(null);
  const [valueInput, setValueInput] = useState('');
  const [result, setResult] = useState('');
  const [balanceaccount, setbalanceaccount] = useState("Balance");
  const [addresAcc, setddresAcc] = useState("Address");

  useEffect(() => {
    const init = async () => {
      try {
        // Connect to Metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();

        // Contract address and ABI
        const contractAddress = '0x44e2bF91efE9043de6919650C3292C4D59cD1326';
        const abi = ABI;

        // Create contract instance
        const contract = new ethers.Contract(contractAddress, abi, signer);

        setContract(contract);
      } catch (error) {
        console.error('Error initializing:', error);
      }
    };

    init();
  }, []);

  const handleSetValue = async () => {
    try {
      const transaction = await contract.setValue(valueInput);
      await transaction.wait();
      console.log('Value set successfully!');
    } catch (error) {
      console.error('Error setting value:', error);
    }
  };

  const handleGetValue = async () => {
    try {
      const result = await contract.value();
      setResult(result.toString());
      console.log('Value retrieved successfully:', result.toString());
    } catch (error) {
      console.error('Error getting value:', error);
    }
  };
  const getAccountInfo = async () => {
    try {
      // ایجاد یک شیء از کلاس Signer با استفاده از اطلاعات مربوط به اتصال به متامسک
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();

      // دریافت آدرس حساب کاربر
      const address = await signer.getAddress();
      setddresAcc(address);


      // دریافت موجودی حساب
      const balance = await signer.getBalance();
      const balanceInEth = ethers.utils.formatEther(balance);
      setbalanceaccount(balanceInEth);

      // نمایش نتیجه
      console.log(`Account Address: ${address}`);
      console.log(`Account Balance: ${ethers.utils.formatEther(balance)} ETH`);
    } catch (error) {
      console.error('Error getting account balance:', error);
    }
  };

  return (

    <Background GetInfo={getAccountInfo}
      AddressValue={addresAcc}
      BalanceValue={balanceaccount}
      SetValueBtn={handleSetValue}
      SetValue={valueInput}
      setValueInput={setValueInput} GetBtn={handleGetValue}
      GetValue={result}

    />


  );
};

export default App;

