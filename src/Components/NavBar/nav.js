import React, { useRef, useState, useEffect } from "react";
import * as styled from "./nav.module.css";
import { NavLink } from "react-router-dom";
import useWindowWidth from "../../Hooks/windowDimensions";

function Nav() {
  const [search, setSearch] = useState("");
  const [appear, setAppear] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { width, height } = useWindowWidth();

  useEffect(() => {
    if (width <= 700) {
      setAppear(true);
    } else {
      setAppear(false);
    }
    console.log(height);
  }, [width]);

  const handleListShow = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styled.nav}>
      <div>
        <h1 className={styled.head}>MyReads</h1>

        {/* <i class={`bi bi-search ${styled.search_icon}`}></i> */}
        <input
          className={styled.input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for books"
        />
      </div>

      <ul className={appear && clicked ? styled.ulActive : styled.ul}>
        <i className={styled.item}>
          <span class={`bi bi-house-door`}></span>
          <NavLink exact to="/" activeClassName={styled.active}>
            Home
          </NavLink>
        </i>

        <i className={styled.item}>
          <span class={`bi bi-book`}></span>
          <NavLink to="/myBooks" activeClassName={styled.active}>
            My Books
          </NavLink>
        </i>
      </ul>
      {clicked ? (
        <i
          class={`bi bi-x-lg ${styled.hamburger}`}
          onClick={handleListShow}
        ></i>
      ) : (
        <i
          class={`bi bi-list ${styled.hamburger}`}
          onClick={handleListShow}
        ></i>
      )}
    </div>
  );
}

export default Nav;
