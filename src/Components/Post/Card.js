import React, { useEffect, useState } from "react";

import BookCard from "../Cards/Book/index";
import useWindowWidth from "../../Hooks/windowDimensions";

export default function CustomCard({ book }) {
  const { width, height } = useWindowWidth();
  const [flag, setFlag] = useState(true);
  const [padding, setPadding] = useState("0");
  useEffect(() => {
    width < 997 ? setFlag(false) : setFlag(true);
  }, [width]);
  return (
    <BookCard padding_Right="0.5rem" padding_left={style.container.paddingLeft}>
      {/* <BookCard.Top userName={userName} text={text} userImage={userImage} /> */}
      <BookCard.Body>
        <BookCard.Image src={book.imageLink} />
        <BookCard.BookInfo>
          <BookCard.Title>{book.title}</BookCard.Title>
          <BookCard.Author>{book.authors}</BookCard.Author>
          <BookCard.Row>
            <BookCard.Changer width="170px" />
            {flag && <span style={style.span}>Rating</span>}
            <BookCard.Rating
              paddingLeft="0.5rem"
              paddingTop="0.3rem"
              rating={book.averageRating}
            />
          </BookCard.Row>
          <BookCard.Description>{book.description}</BookCard.Description>
        </BookCard.BookInfo>
      </BookCard.Body>
    </BookCard>
  );
}
const style = {
  container: {
    paddingLeft: "2rem",
  },
  span: {
    marginTop: 0,
    marginRight: 0,
    paddingTop: "0.6rem",
    paddingRight: "0.4rem",
    fontSize: "0.8rem",
    color: "#7a787a",
  },
};
