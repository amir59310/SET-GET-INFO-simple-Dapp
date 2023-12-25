import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ABI from "./abiFile/ABI.json";
import Background from "./Components/Background";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import toast from module file toastNotification
import{ClickSet , ResultFalseGet, ResultFalseSet, ResultTrueGet, PleaseSetNumber, UpdateTrueGetInfo, UpdateFalseGetInfo , ResultTrueSet} from "./module/toastNotification"



const App = () => {
  const [contract, setContract] = useState(null);
  const [valueInput, setValueInput] = useState(0);
  const [result, setResult] = useState("");
  const [balanceaccount, setbalanceaccount] = useState("Balance");
  const [addresAcc, setddresAcc] = useState("Address");

 
  // Initialize contract and connect to Metamask
  
  useEffect(() => {
    const init = async () => {
      try {
        // Connect to Metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();

        // Contract address and ABI
        const contractAddress = "0x44e2bF91efE9043de6919650C3292C4D59cD1326";
        const abi = ABI;

        // Create contract instance
        const contract = new ethers.Contract(contractAddress, abi, signer);

        setContract(contract);
      } catch (error) {
        console.error("Error initializing:", error);
      }
    };

    init();
  }, []);

  // Set value to contract
  //Set Input function SetValue

  const handleSetValue = async () => {

    // Checked valueInput is a number
    const intValueInput = parseInt(valueInput);

    try {

      const transaction = await contract.setValue(intValueInput);

      ClickSet(); //Show Click Set Toast

      await transaction.wait();

      console.log("Value set successfully");

      ResultTrueSet();
    } catch (error) {
      console.error("Error setting value:", error);
      // Check error message for user rejection
      if (error.message.includes("user rejected transaction")) {
        ResultFalseSet();
      }
      // Check error message for invalid Set Number
      else if (error.message.includes("invalid BigNumber")) {
        PleaseSetNumber();
      }

    }
  };

  // Get value from contract
  // Call function SetValue For Show Result

  const handleGetValue = async () => {
    try {
      const result = await contract.value();
      setResult(result.toString());
      console.log("Value retrieved successfully:", result.toString());

      // Toast For Get Rsult Success
      ResultTrueGet();

    } catch (error) {
      console.error("Error getting value:", error);

      // Toast For Get Rsult Failed
      ResultFalseGet();
    }
  };

  // Get account info

  const getAccountInfo = async () => {
    try {
      // ایجاد یک شیء از کلاس Signer با استفاده از اطلاعات مربوط به اتصال به متامسک
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
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
      UpdateTrueGetInfo();
    } catch (error) {
      console.error("Error getting account balance:", error);
      UpdateFalseGetInfo();
    }

  };

  return (
    <div>
      <div>
        <ToastContainer />
      </div>

      <Background
        //props from Background
        
        GetInfo={getAccountInfo}
        AddressValue={addresAcc}
        BalanceValue={balanceaccount}
        SetValueBtn={handleSetValue}
        SetBtn={valueInput}
        setValueInput={setValueInput}
        GetBtn={handleGetValue}
        GetValue={result}
      />
    </div>
  );
};

export default App;
