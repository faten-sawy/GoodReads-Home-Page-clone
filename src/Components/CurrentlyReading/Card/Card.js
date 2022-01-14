import React from "react";
import BookCard from "../../Cards/Book";
import * as styled from "./Card.module.css";
function CustomCard({ src, title, author, maxValue, currentValue }) {
  return (
    <BookCard className={styled.container}>
      <BookCard.Row width="300px">
        <BookCard.Image src={src} width="90px" />
        <BookCard.BookInfo>
          <BookCard.Title className={styled.title}>{title}</BookCard.Title>
          <BookCard.Author className={styled.author}>{author}</BookCard.Author>

          <BookCard.Progress maxValue={maxValue} currentValue={currentValue} />
          <BookCard.Button className={styled.button}>
            update progress
          </BookCard.Button>
        </BookCard.BookInfo>
      </BookCard.Row>
    </BookCard>
  );
}

export default CustomCard;
