import React from "react";
import BookCard from "../Cards/Book";

function SecondCard({ book }) {
  return (
    <BookCard style={styles.container}>
      <BookCard.Row>
        <BookCard.Image style={styles.image} src={book.imageLink} />
        <BookCard.BookInfo>
          <BookCard.Title style={styles.title}>{book.title}</BookCard.Title>
          <BookCard.Author style={styles.author}>
            {book.authors}
          </BookCard.Author>

          <BookCard.Changer style={styles.changer} />
        </BookCard.BookInfo>
      </BookCard.Row>
      <BookCard.Description style={styles.description}>
        {book.description}
      </BookCard.Description>
    </BookCard>
  );
}
const styles = {
  container: {
    position: "relative",
    marginTop: "1rem",
    paddingLeft: "0.5rem",
  },
  image: {
    width: "60px",
  },
  title: {
    fontSize: "1em",
  },
  author: {
    fontSize: "1em",
  },
  description: {
    marginTop: "0.5rem",
  },
  changer: {
    width: "180px",
  },
};

export default SecondCard;
