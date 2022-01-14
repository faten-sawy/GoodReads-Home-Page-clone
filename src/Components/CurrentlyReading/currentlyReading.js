import React, { useState, useEffect } from "react";
import { getAll } from "../../BooksAPI";
import { NavLink } from "react-router-dom";
/* import CustomCard from "../Cards/CurrentRead/Card"; */
import CustomCard from "./Card/Card";
import * as styled from "./currentlyReading.module.css";

function CurrentlyReading() {
  const [currentReadingBooks, setCurrentReadingBooks] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/Books")
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        setCurrentReadingBooks(
          data.filter((item) => item.shelf === "currentlyReading")
        )
      );

    /*  console.log(currentReadingBooks); */
  }, []);

  return (
    <>
      <h6 className={styled.title}> CURRENTLY READING</h6>
      <div>
        {currentReadingBooks?.map((item) => (
          <CustomCard
            src={item.imageLink}
            title={item.title}
            author={item.authors[0]}
            maxValue={item.pageCount}
            currentValue="200"
          />
          /* <CustomCard
            src={item.imageLink}
            title={item.title}
            author={item.authors}
            maxValue={item.pageCount}
            currentValue="200"
          /> */
        ))}

        <div className={styled.linksContainer}>
          <NavLink className={styled.link} to="/not-completed-yet">
            View All Books
          </NavLink>
          <NavLink className={styled.link} to="/not-completed-yet">
            Add a book
          </NavLink>
          <NavLink className={styled.link} to="/not-completed-yet">
            General update
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CurrentlyReading;
