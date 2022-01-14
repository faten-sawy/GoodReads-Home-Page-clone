import React, { useState, useEffect } from "react";

import BookCard from "../Cards/Book";
import useWindowWidth from "../../Hooks/windowDimensions";
export default function CustomCard({
  imageSrc,
  title,
  author,
  rating,
  description,
}) {
  const { width, height } = useWindowWidth();
  const [divWidth, setDivWidth] = useState("");
  useEffect(() => {
    width < 1220 ? setDivWidth("80px") : setDivWidth("80px");
  }, [width]);

  return (
    <BookCard>
      <BookCard.Row width="300">
        <BookCard.Image
          width={style.image.width}
          height={style.image.height}
          src={imageSrc}
        />
        <BookCard.BookInfo width="120%">
          <BookCard.Title bold={style.title.bold} fontSize="0.9em">
            {title}
          </BookCard.Title>
          <BookCard.Author
            marginBottom={style.author.marginBottom}
            fontSize={style.author.fontSize}
            width="80%"
          >
            {author}
          </BookCard.Author>
          <BookCard.Row>
            <BookCard.Rating
              backgroundColor="green"
              width={divWidth}
              rating={rating}
            />
            <span style={style.span}>{`(${rating})`}</span>
          </BookCard.Row>
          <BookCard.Changer
            fontSize="0.8rem"
            width="160px"
            position="relative"
            top="-12px"
          />
        </BookCard.BookInfo>
      </BookCard.Row>

      <BookCard.Description width="120%" linesNumber={3} paddingTop="0.5rem">
        {description}
      </BookCard.Description>
    </BookCard>
  );
}
const style = {
  image: {
    height: "140px",
    width: "100px",
  },
  title: {
    fontSize: "0.8em",
    bold: true,
  },
  author: {
    fontSize: "0.8em",
    marginBottom: "0",
  },
  span: {
    margin: 0,
    /*  width: "20vw", */
    width: "2vw",
    fontSize: "0.9em",
    paddingTop: "0.25rem",
    color: "#7a787a",
    textAlign: "left",
    /* backgroundColor: "red", */
  },
};
