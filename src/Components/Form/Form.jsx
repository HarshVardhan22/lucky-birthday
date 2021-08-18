import React, { useState } from "react";
import styles from "./Form.module.css";
import Bounce from "react-reveal/Bounce";

const Form = () => {
  const [dob, setDob] = useState("");
  const [lucky, setLucky] = useState("");
  const [result, setResult] = useState("");

  const checkLucky = (e) => {
    e.preventDefault();

    let strArr = dob.replaceAll("-", "").split("");

    console.log(strArr);
    let sum = 0;
    for (let i = 0; i < strArr.length; i++) {
      sum += parseInt(strArr[i]);
    }
    if (sum % lucky === 0) {
      setResult(true);
      console.log("lucky");
    } else {
      setResult(false);
      console.log("Not lucky");
    }
  };

  return (
    <div>
      <Bounce left cascade>
        <form className={styles.container} onSubmit={checkLucky}>
          <h1>Enter Your Birth Date</h1>

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <input
            type="number"
            value={lucky}
            placeholder="Enter Your Lucky Number"
            onChange={(e) => setLucky(e.target.value)}
            required
          />
          {lucky && (
            <p>Privacy Notice : Rest Assured, We don't collect your Data</p>
          )}
          <button>Check Now!</button>

          {result !== "" && result && (
            <div className={styles.container}>
              <img src="https://media.giphy.com/media/3oz9ZE2Oo9zRC/giphy.gif" alt="gif_PASS"/>
              <h2>Your Birthday is Lucky!!</h2>
            </div>
          )}
          {result === false && (
            <div className={styles.container}>
            <img src="https://media.giphy.com/media/7VHV66bRjGRSo/giphy.gif" alt="gif_FAIL" />
            <h2>Sorry!! Your Birthday isn't Lucky</h2>
            </div>
            
          )}
        </form>
      </Bounce>
    </div>
  );
};

export default Form;
