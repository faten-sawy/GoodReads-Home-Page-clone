import React from "react";
import BookCard from "../../Cards/Book";
import * as styled from "./Card.module.css";
function CustomCard({ book, currentValue }) {
  return (
    <BookCard className={styled.container}>
      <BookCard.Row width="300px">
        <BookCard.Image src={book.imageLink} width="90px" />
        <BookCard.BookInfo>
          <BookCard.Title className={styled.title}>{book.title}</BookCard.Title>
          <BookCard.Author className={styled.author}>
            {book.authors}
          </BookCard.Author>

          <BookCard.Progress
            maxValue={book.pageCount}
            currentValue={currentValue}
          />
          <BookCard.Button className={styled.button}>
            update progress
          </BookCard.Button>
        </BookCard.BookInfo>
      </BookCard.Row>
    </BookCard>
  );
}

export default CustomCard;
