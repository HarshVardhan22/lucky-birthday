import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [dob, setDob] = useState("");
  const [lucky, setLucky] = useState(0);
  const [result, setResult] = useState(false);

  const checkLucky = (e) => {
    e.preventDefault();
   
    let strArr = dob.replaceAll("-",'').split("");

    console.log(strArr)
    let sum = 0;
    for (let i = 0; i < strArr.length; i++) {
      sum += parseInt(strArr[i]);
    }
    if (sum % lucky === 0) {setResult(true); console.log("lucky")}
    else {setResult(false); console.log("Not lucky")}
  };

  return (
    <div>
      <form onSubmit={checkLucky}>
        <h1>Enter Your Birth Date</h1>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="number"
          value={lucky}
          placeholder="Enter Your Lucky Number"
          onChange={(e) => setLucky(e.target.value)}
        />
        {dob && lucky && (
          <p>Privacy Notice : Rest Assured, We don't collect your Data</p>
        )}
        <button>Check Now!</button>
      </form>
    </div>
  );
};

export default Form;
