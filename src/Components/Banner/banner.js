import React from "react";
import * as styled from "./banner.module.css";

function Banner() {
  return (
    <div className={styled.container}>
      <img
        src="https://images.gr-assets.com/misc/1638828643-1638828643_goodreads_misc.png"
        alt="banner"
        className={styled.img}
      />
      <div>
        <h5>The Most Anticipated Books of 2022</h5>
        <p>
          We looked at readers' most eagerly awaited upcoming books for this
          list...
        </p>
      </div>
    </div>
  );
}

export default Banner;
