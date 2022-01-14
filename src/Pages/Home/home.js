import React, { useEffect, useState } from "react";
import * as styled from "./home.module.css";
import { NavLink } from "react-router-dom";
import CurrentlyReading from "../../Components/CurrentlyReading/currentlyReading";
import WantToRead from "../../Components/WantToRead/wantToRead";
import BookShelves from "../../Components/BookShelves/bookShelves";
import Recommendations from "../../Components/Recomendations/recommendations";
import Banner from "../../Components/Banner/banner";
import Post from "../../Components/Post/post";
import News from "../../Components/News/news";
import Footer from "../../Components/Footer/footer";
import Challenge from "../../Components/Challenge/challenge";
import src from "./capture.PNG";
import useWindowWidth from "../../Hooks/windowDimensions";
function Home() {
  /* const [flag, setFlag] = useStatelaptopScreenSize: false,
    mobileScreen: false,
  }); */
  const [laptopScreenSize, setLaptopScreenSize] = useState(false);
  const [mobileScreenSize, setMobileScreenSize] = useState(false);
  const { width, height } = useWindowWidth();
  useEffect(() => {
    width < 1220 ? setLaptopScreenSize(true) : setLaptopScreenSize(false);

    width < 769 ? setMobileScreenSize(true) : setMobileScreenSize(false);
  }, [width]);
  return (
    <div className={styled.container}>
      <section className={styled.leftSection}>
        <CurrentlyReading />
        {laptopScreenSize && (
          <>
            <h6 className={styled.title}> goodreads choice awards</h6>
            <img src={src} className={styled.image} alt="figure" />
          </>
        )}
        <Challenge />
        <WantToRead />
        <BookShelves />
        {laptopScreenSize && (
          <>
            <Recommendations />
            <News />
            <Footer />
          </>
        )}
      </section>
      <section className={styled.middleSection}>
        <Banner />
        <div className={styled.updates}>
          <h5>Updates</h5>

          <i className={`bi bi-gear-fill ${styled.settingIcon}`}>Customize</i>
        </div>
        <Post />
        {mobileScreenSize && <Footer />}
      </section>
      {!laptopScreenSize && (
        <section className={styled.rightSection}>
          <h6 className={styled.title}> goodreads choice awards</h6>
          <img src={src} className={styled.image} alt="figure" />
          <Recommendations />
          <News />
          <Footer />
        </section>
      )}
    </div>
  );
}

export default Home;
