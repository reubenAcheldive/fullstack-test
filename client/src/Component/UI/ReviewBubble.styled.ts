import S from "styled-components";

export const ReviewBubbleContainerWrap = S.div`
display: flex;
flex-direction: column-reverse;
gap: 10px;
flex-wrap: wrap;



`;

export const ReviewBubbleContainer = S(ReviewBubbleContainerWrap)`
display: inline-flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
padding: 10px 30px 12px 15px;
min-width: auto;
height: 75%;
background: rgba(255, 255, 255, 0.1);
border-radius: 10px 10px 10px 2px;

`;
export const ReviewBubbleTitle = S(ReviewBubbleContainer)`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
flex: none;
order: 0;
flex-grow: 0;
width: 63px;
height: 16px;
background:none;
color:#fff;

`;
export const ReviewBubbleDescription = S(ReviewBubbleContainer)`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
flex: none;
order: 1;
flex-grow: 0;
width: 95px;
height: 16px;
background:none;
color:#FFFFFF;
`;
