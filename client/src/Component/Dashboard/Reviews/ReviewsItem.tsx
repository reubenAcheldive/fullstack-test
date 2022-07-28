import React from "react";
import { IReviews } from "../../../interface/Reviews.interface";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";
import {
  ReviewBubbleContainer,
  ReviewBubbleContainerWrap,
  ReviewBubbleDescription,
  ReviewBubbleTitle,
} from "../../UI/ReviewBubble.styled";
export interface Props {
  reviews: IReviews[] | [];
}
const ReviewsItem = ({ reviews }: Props) => {
  console.log(reviews)
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
        {reviews?.map(({ title, description, _id }) => (
          <ReviewBubbleContainer key={_id}>
            <ReviewBubbleTitle>{title}</ReviewBubbleTitle>
            <ReviewBubbleDescription>{description}</ReviewBubbleDescription>
          </ReviewBubbleContainer>
        ))}
      </ReviewBubbleContainerWrap>
    </div>
  );
};

export default ReviewsItem;
