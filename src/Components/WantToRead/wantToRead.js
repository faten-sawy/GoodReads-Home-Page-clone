import React, { useState, useEffect } from "react";
import { getAll } from "../../BooksAPI";
import * as styled from "./wantToRead.module.css";
import { Link } from "react-router-dom";

function WantToRead() {
  const [wantToReadBooks, setWantToReadBooks] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/Books")
      .then((res) => {
        return res.json();
      })
      .then((data) =>
        setWantToReadBooks(data.filter((item) => item.shelf === "wantToRead"))
      );
  }, []);

  return (
    <div className={styled.container}>
      <h1 className={styled.title}>WANT TO READ</h1>
      {wantToReadBooks?.map((item) => (
        <>
          <Link to={`/details:${item.id}`}>
            <img src={item.imageLink} />
          </Link>
        </>
      ))}
      <div>
        <Link to="/mybooks" className={styled.link}>
          View all books
        </Link>
      </div>
    </div>
  );
}

export default WantToRead;
