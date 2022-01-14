import React, { createContext, useContext } from "react";

import StarRatings from "react-star-ratings";

import {
  Container,
  TopSection,
  UserName,
  Text,
  user_Image,
  BodySection,
  BookImage,
  Info,
  BookTitle,
  BookAuthor,
  DropDown,
  Select,
  Option,
  RowDiv,
  ColDiv,
  RatingValue,
  DescriptionText,
  UpdateButton,
  ProgressBar,
  ProgressDiv,
  ProgressRation,
} from "./styles/post";
var cardContext = createContext();

//React custom Hook
function useCardContext() {
  var context = useContext(cardContext);

  if (!context) {
    throw new Error(
      "Child components of customCard can't be render outside customCard Component !"
    );
  }
  return context;
}

export default function BookCard({ children, ...restProps }) {
  return (
    <cardContext.Provider value={{}}>
      <Container {...restProps}>{children}</Container>
    </cardContext.Provider>
  );
}
BookCard.Top = function Top({ userName, text, userImage, ...restProps }) {
  var context = useCardContext(cardContext);

  return (
    <TopSection {...restProps}>
      {console.log(userImage)}
      <user_Image src={userImage} />
      <UserName>
        {userName} <Text>{text}</Text>
      </UserName>
      <div
        style={{
          height: "10vh",
          backgroundColor: "red",
          width: "20vw",
          display: "block",
        }}
      >
        <user_Image
          src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
          alt="NoFound"
        />
      </div>
    </TopSection>
  );
};
BookCard.Body = function Body({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <BodySection {...restProps}>{children}</BodySection>;
};
BookCard.Image = function Image({ src, alt, ...restProps }) {
  var context = useCardContext(cardContext);
  return <BookImage src={src} alt={alt} {...restProps} />;
};
BookCard.BookInfo = function BookInfo({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <Info {...restProps}>{children}</Info>;
};
BookCard.Title = function Title({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <BookTitle {...restProps}>{children}</BookTitle>;
};
BookCard.Author = function Author({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <BookAuthor {...restProps}>{`by ${children}`}</BookAuthor>;
};
BookCard.Row = function Row({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <RowDiv {...restProps}>{children}</RowDiv>;
};
BookCard.Col = function Col({ children, ...restProps }) {
  var context = useContext(cardContext);
  return <ColDiv {...restProps}>{children}</ColDiv>;
};
BookCard.Changer = function Changer({ ...restProps }) {
  var context = useCardContext(cardContext);
  return (
    <DropDown {...restProps}>
      <Select>
        <Option value="move" disabled>
          Move to...
        </Option>
        <Option value="wantToRead">Want to Read</Option>
        <Option value="currentlyReading">Currently Reading</Option>
        <Option value="read">Read</Option>
        <Option value="none">None</Option>
      </Select>
    </DropDown>
  );
};
BookCard.Rating = function Rating({ rating, ...restProps }) {
  var context = useCardContext(cardContext);
  return (
    <RatingValue {...restProps}>
      <StarRatings
        rating={parseInt(rating)}
        starRatedColor="orange"
        numberOfStars={5}
        starEmptyColor=" #d8d8d8"
        starDimension="15px"
        starSpacing="0px"
      />
    </RatingValue>
  );
};
BookCard.Description = function Description({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return (
    <>
      <DescriptionText {...restProps}>{children}</DescriptionText>
      <span
        style={{
          cursor: "pointer",
          fontSize: "0.9rem",
          marginLeft: "0",
          color: "#006672",
        }}
      >
        Continue reading
      </span>
    </>
  );
};

BookCard.Progress = function Progress({ maxValue, currentValue }) {
  const ratio = parseInt((currentValue / maxValue) * 100);
  var context = useCardContext(cardContext);
  return (
    <ProgressDiv>
      <ProgressBar max={maxValue} value={currentValue} />
      <ProgressRation>
        {`${currentValue}/${maxValue} (${ratio}%) `}
      </ProgressRation>
    </ProgressDiv>
  );
};
BookCard.Button = function Button({ children, ...restProps }) {
  const context = useCardContext(cardContext);
  return <UpdateButton {...restProps}>{children}</UpdateButton>;
};
