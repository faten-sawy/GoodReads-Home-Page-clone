import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as styled from "./recommendations.module.css";
import { getAll, search } from "../../BooksAPI";
import StarRatings from "react-star-ratings";
import CustomCard from "./Card";

function Recommendations() {
  const [currentBook, setCurrentBook] = useState({});
  const [recommendBooks, setRecommendBooks] = useState([]);
  const [book, setBook] = useState({});
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/Books")
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        setRecommendBooks(
          data.filter(
            (item) =>
              item.categories === "Computers" &&
              item.shelf !== "currentlyReading"
          )
        )
      );

    setBook(recommendBooks[index]);
  }, []);

  const handleNext = async () => {
    if (recommendBooks && index !== recommendBooks.length) {
      setIndex(index + 1);
      console.log(index);
      setBook(recommendBooks[index + 1]);
      console.log(index);
    }
  };

  /*  console.log(recommendBooks[3].imageLink); */
  return (
    <div className={styled.container}>
      <h6 className={styled.subTitle}>Recommendations</h6>
      {/* <i style={{ fontSize: "40px" }} class="bi bi-caret-right"></i> */}
      <p className={styled.text}>
        Because you enjoyed <span>Programming Perl:</span>
      </p>
      <div className={styled.semiContainer}>
        <CustomCard
          title="ACSM Fitness Book"
          imageSrc="http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          author="Lauren Mangili"
          rating="5"
          description="Start where you are and go wherever your goals take you. No other guide offers a more comprehensive plan for developing a personal fitness program and sticking with it. Developed by the American College of Sports Medicine, ACSM Fitness Bookoffers the total package from one of the most respected organizations in the field. In its first two editions, the ACSM Fitness Booksold more than 100,000 copies. Now the classic has been enhanced and expanded with the tools you need to succeed. From simple, step-by-step instruction to new insights on nutrition, weight control, motivation, and overcoming setbacks, the authors provide the help you need to reach beyond your personal best. The key to making any fitness program effective is finding the right level of difficulty for your current ability and creating a plan that will take you to the next level. With a simple and scientifically proven fitness test, the ACSM Fitness Bookgives you everything you need to determine your starting point and monitor your ongoing progress. With sample programs, worksheets, and more, ACSM Fitness Booktakes the guesswork out of getting started and offers color photos of a variety of exercises that require minimal equipment and space. Whether your objective is to improve cardiovascular endurance, muscular strength, flexibility, or overall body condition, the ACSM Fitness Bookwill lay out a proven plan for reaching your goal in a way that works for you. Richly illustrated and easy to follow, it is the one book you need for the tools, and the motivation, to put your personal fitness program on track."
        />
        <i className={`bi bi-caret-right ${styled.icon}`}></i>
      </div>

      <Link className={styled.link} to="/not-completed-yet">
        View all Books similar to <b>Programming Perl</b>
      </Link>
    </div>
  );
}

export default Recommendations;
