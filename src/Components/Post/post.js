import React, { useEffect, useState } from "react";
import faker from "faker";
import * as styled from "./post.module.css";
import CustomCard from "./Card";
import SecondCard from "./SecondCard";
import { Link } from "react-router-dom";
import src from "./Capture.PNG";
import src_4 from "./Capture6.PNG";
import src_2 from "../../helper/images/first.PNG";
import src_3 from "../../helper/images/second.PNG";
import src_1 from "../../helper/images/third.PNG";
import src_5 from "./woman.PNG";
import src_6 from "./man.PNG";
import useWindowWidth from "../../Hooks/windowDimensions";

function Post() {
  const [posts, setPosts] = useState([]);
  const { width, height } = useWindowWidth();
  const [flag, setFlag] = useState(true);
  const images = [src_1, src_2, src_3, src_5, src_6];
  useEffect(() => {
    fetch("http://localhost:3000/Posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data));
    console.log(posts);
  }, []);

  useEffect(() => {
    width < 480 ? setFlag(false) : setFlag(true);
  }, [width]);
  console.log(src);
  return (
    <>
      {posts?.map((item, index) => (
        <div className={styled.container}>
          <div className={styled.userInfo}>
            <div>
              <img src={images[index]} />
            </div>
            <p>{item.userName}</p>
            <p>{item.status}</p>

            {/* <p className={styled.time}>3h</p> */}
          </div>
          <div className={styled.topSection}>
            {flag ? (
              <CustomCard book={item.book} />
            ) : (
              <SecondCard book={item.book} />
            )}
            <div className={styled.linksContainer}>
              <span className={styled.links}>Like</span>
              <span className={styled.dot}>.</span>
              <span className={styled.links}>Comment</span>
            </div>
          </div>
          <div className={styled.bottomSection}>
            <div className={styled.userImage}>
              <img src={src_4} />
            </div>
            <div className={styled.comment}>
              <textarea placeholder="Write a comment..." />
              <button disabled>Comment</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
