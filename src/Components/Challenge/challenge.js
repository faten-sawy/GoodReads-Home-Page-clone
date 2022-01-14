import React from "react";
import * as styled from "./challenge.module.css";
import src from "./Capture.PNG";
import { Link } from "react-router-dom";
function Challenge() {
  return (
    <div className={styled.container}>
      <h6>2021 READING CHALLENGE</h6>
      <div className={styled.content}>
        <div>
          <img src={src} />
        </div>

        <div className={styled.info}>
          <p style={{ display: "block" }}>
            Congrats! <br></br> You have read{" "}
            <span className={styled.bookNumber}>5 books</span> of your goal of
            5!
          </p>
          <progress max={5} value={5} className={styled.progressBar}></progress>
          <span className={styled.percent}> 5/5 (100%)</span>
          <Link className={styled.link}>View Challenge</Link>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
