import S from "styled-components";
import { ButtonProps, ButtonStyled } from "./Button";
export const ReviewBubbleContainerWrap = S.div`
display: flex;
flex-direction: column-reverse;
gap: 10px;
flex-wrap: wrap;
width: auto;


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
position: relative;
width: auto;
&:hover{
    background-color: rgba(255, 255, 255, 0.25);
}


`;
export const ReviewBubbleTitle = S(ReviewBubbleContainer)`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
flex: none;
order: 0;
flex-grow: 0;

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
width: auto;
height: 16px;
background:none;
color:#FFFFFF;
`;
export const DeletedButtonStyle = S(ButtonStyled)<Partial<ButtonProps>>`
display:none;
${ReviewBubbleContainer}:hover & {
    position: absolute;
    display: block;
    right: 0%;
    top: -10%;
    bottom: 0%;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }



`;
