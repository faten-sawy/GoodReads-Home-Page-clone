import React from "react";
import * as styled from "./news.module.css";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className={styled.container}>
      <h6>News & interviews</h6>
      <Link to="/not-completed-yet" className={styled.link}>
        4 Great Books Hitting Shelves This Week
      </Link>
      <img src="https://images.gr-assets.com/blogs/1638295694p7/2197.jpg" />
      <p>17 likes</p>
    </div>
  );
}

export default News;
