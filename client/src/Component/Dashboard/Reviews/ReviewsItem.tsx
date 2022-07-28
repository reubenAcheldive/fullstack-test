import React from "react";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";
import {
  ReviewBubbleContainer,
  ReviewBubbleContainerWrap,
  ReviewBubbleDescription,
  ReviewBubbleTitle,
} from "../../UI/ReviewBubble.styled";

const ReviewsItem = () => {
  return (
    <div style={{ overflow: "auto", height: "100%", width: "100%" }}>
      <GlobalParagraphStyle
        width="400px"
        LineHeight="16px"
        background=" "
        color="#C4D2DC"
        fontWeight=""
        fontSize="14px"
        height="32px"
        order="0"
        flexGrow="0"
      >
        <span>No reviews added yet.</span>
        <span>Learn how to add reviews</span>
      </GlobalParagraphStyle>
      <ReviewBubbleContainerWrap>
        <ReviewBubbleContainer>
          <ReviewBubbleTitle>Hello</ReviewBubbleTitle>
          <ReviewBubbleDescription>Hello1</ReviewBubbleDescription>
        </ReviewBubbleContainer>
        <ReviewBubbleContainer>
          <ReviewBubbleTitle>Hello</ReviewBubbleTitle>
          <ReviewBubbleDescription>Hello1</ReviewBubbleDescription>
        </ReviewBubbleContainer>
      </ReviewBubbleContainerWrap>
    </div>
  );
};

export default ReviewsItem;
