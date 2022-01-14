import React from "react";
import BookCard from "../Cards/Book";

function SecondCard({ src, alt, title, author, rating, description }) {
  return (
    <BookCard style={styles.container}>
      <BookCard.Row>
        <BookCard.Image style={styles.image} src={src} alt={alt} />
        <BookCard.BookInfo>
          <BookCard.Title style={styles.title}>{title}</BookCard.Title>
          <BookCard.Author style={styles.author}>{author}</BookCard.Author>

          <BookCard.Changer style={styles.changer} />
        </BookCard.BookInfo>
      </BookCard.Row>
      <BookCard.Description style={styles.description}>
        {description}
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
