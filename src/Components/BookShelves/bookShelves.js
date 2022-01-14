import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../BooksAPI";
import * as styled from "./bookshelves.module.css";

function BookShelves() {
  const [numbers, setNumbers] = useState({
    currentRead: 0,
    read: 0,
    wantToRead: 0,
  });
  useEffect(() => {
    fetch("http://localhost:3000/Books")
      .then((response) => response.json())
      .then((data) =>
        setNumbers({
          read: data.filter((item) => item.shelf === "currentlyReading").length,
          currentRead: data.filter((item) => item.shelf === "currentlyReading")
            .length,
          wantToRead: data.filter((item) => item.shelf === "wantToRead").length,
        })
      );
    /* getAll().then((res) =>
      
    ); */
  }, []);

  return (
    <div className={styled.container}>
      <h1 className={styled.title}>BOOK SHELVES</h1>
      <Link
        className={styled.link}
        to="/mybooks"
      >{`${numbers.currentRead} Current Reading`}</Link>
      <Link
        className={styled.link}
        to="/mybooks"
      >{`${numbers.wantToRead} Want To Read`}</Link>
      <Link
        className={styled.link}
        to="/mybooks"
      >{`${numbers.read} Read`}</Link>
    </div>
  );
}

export default BookShelves;
