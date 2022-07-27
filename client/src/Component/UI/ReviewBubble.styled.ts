import S from "styled-components";
export const ReviewBubbleContainer = S.div`
padding: 10px 30px 12px 15px;
width: auto;
height: auto;
background: rgba(255, 255, 255, 0.1);
border-radius: 10px 10px 10px 2px;
background: #39454C;
display: inline-flex;
flex-direction: column;
align-items: flex-start;
`;
export const ReviewBubbleTitle = S(ReviewBubbleContainer)`
color: #FFFFFF;
font-weight: 700;
font-family: 'Assistant';
font-style: normal;
line-height: 16px;
width: 100%;
height: 29px;
display: flex;
align-items: flex-start;

`;
export const ReviewBubbleDescription = S(ReviewBubbleContainer)`
color: rgba(255, 255, 255, 0.5);
width: 100%;
height: 16px;
font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
&:hover{
    background-color: red;
};


`;
