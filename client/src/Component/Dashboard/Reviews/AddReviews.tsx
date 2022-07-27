import React from "react";
import S from "styled-components";
const AddReviewsContainerStyled = S.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 18px 20px 20px;
gap: 15px;
width: 430px;
height: 132px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
`;

const TitleInputStyled = S.input`
width: 330px;
height: 18px;
font-family: 'Assistant';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
color: #39454C;
flex: none;
order: 0;
outline: none;
flex-grow: 0;
border: none;
::placeholder {
  color: #C4D2DC;
}
`;

const CountWordStyled = S.span`
width: 50px;
height: 18px;
font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: right;
color: #64757E;
flex: none;
order: 1;
flex-grow: 0;
`;
const StretchLineStyled = S.span`
width: 390px;
height: 1px;
background: #EBEFF7;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

const discretionInputStyled = S.input`
width: 313px;
height: 18px;
font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
color: #C4D2DC;
flex: none;
order: 0;
flex-grow: 0;
`;

const AddReviews = () => {
  return (
    <div>
      <AddReviewsContainerStyled>
        <span style={{ display: "flex" }}>
          <TitleInputStyled placeholder="Enter review title" />
          <CountWordStyled> 0/255</CountWordStyled>
        </span>
        <StretchLineStyled />
        
      </AddReviewsContainerStyled>
    </div>
  );
};

export default AddReviews;
//"section"