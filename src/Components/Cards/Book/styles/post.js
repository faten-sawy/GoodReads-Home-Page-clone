import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  ${"" /* margin-top: 1rem; */}
  padding-left: ${(props) => props.padding_left || 0};
  padding-right: ${(props) => props.padding_Right || 0};
  width: 100%;
`;
export const TopSection = styled.div`
  margin-top: 1rem;
  height: 13%;
  display: flex;
  background-color: red;
`;
export const UserName = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  width: 60%;
  background-color: blue;
`;
export const Text = styled.span`
  margin-left: 0;
  font-weight: lighter;
  font-size: 0.9rem;
`;
export const user_Image = styled.img`
  width: 20%;
  height: 100%;
  display: block;
  background-color: green;
`;
export const BodySection = styled.div`
  display: flex;
  height: 190px;
`;
export const BookImage = styled.img`
  height: ${(props) => props.height || "90%"};
  width: ${(props) => props.width || "120px"};
  margin-right: ${(props) => props.marginRight || null};
`;
export const Info = styled.div`
  height: 100%;
  width: ${(props) => props.width || "80%"};
  margin-left: ${(props) => props.marginLeft || "0.5rem"};
`;
export const BookTitle = styled.h5`
  color: black;
  font-size: ${(props) => props.fontSize || "normal"};
`;
export const BookAuthor = styled.h5`
  font-size: ${(props) => props.fontSize || "normal"};
  margin-bottom: ${(props) => props.marginBottom || null};
  width: ${(props) => props.width || "100%"};
  position: ${(props) => props.position || null};
  right: ${(props) => props.right || null};
`;
export const DropDown = styled.div`
  width: ${(props) => props.width || "220px"};
  font-size: ${(props) => props.fontSize || "normal"};
  position: ${(props) => props.position || null};
  top: ${(props) => props.top || null};
`;
export const Select = styled.select`
  width: 100%;

  height: 30px;
  border: none;
  border-radius: 3px;
  background: #409d69;
  background-image: url("./icons/arrow-drop-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  ${
    "" /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  }
  outline: none;
  color: white;
  padding-left: 0.3rem;
  &:hover {
    background: green;
  }
`;
export const Option = styled.option`
  color: black;
  background: white;
  &:hover {
    background: gray;
  }
`;
export const RatingValue = styled.div`
  padding-top: ${(props) => props.paddingTop || "normal"};
  padding-bottom: ${(props) => props.paddingBottom || "normal"};
  width: ${(props) => props.width || null};
  margin: ${(props) => props.margin || null};
  height: 30px;
  padding-left: ${(props) => props.paddingLeft || null}
    ${"" /*   background-color: ${(props) => props.backgroundColor}; */};
`;
export const RatingText = styled.span`
  margin-top: 0;
  margin-right: 0;
  padding-top: 0.3rem;
  padding-right: 0.4rem;
  font-size: 0.8rem;
  color: #7a787a;
`;
export const DescriptionText = styled.p`
  margin-bottom: 0;
  padding-top: ${(props) => props.paddingTop || null};
  font-size: 0.9em;

  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.linesNumber || 2};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const RowDiv = styled.div`
  display: flex;
  min-height: 40px;
  height: auto;
  ${"" /*  background-color: red; */}
  width:${(props) => props.width || null}
`;
export const UpdateButton = styled.button`
  height: 25px;
  width: 110px;
  font-size: 0.7rem;
  border-radius: 4px;
  border: none;
  border: 1px solid #927f64;
  text-transform: capitalize;
  /*  background-color: #ffd767;
  color: #32362d; */
  color: #32362d;
`;
export const ProgressDiv = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;
export const ProgressBar = styled.progress`
  border: none;
  width: 90px;
  height: 15px;
  background: #d6d0c4;
  &::-webkit-progress-value {
    background: #927f64;
  }
  &::-webkit-progress-bar {
    background: #d6d0c4;
  }
  &::-moz-progress-value {
    background: #927f64;
  }
  &::-moz-progress-bar {
    background: #d6d0c4;
  }
`;
export const ProgressRation = styled.p`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0;
  margin-left: 0.5rem;
`;
export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
