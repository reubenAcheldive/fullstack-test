import React from "react";
import { reviewsService } from "../../../api/reviews.service";
import { IReviews } from "../../../interface/Reviews.interface";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";
import {
  DeletedButtonStyle,
  ReviewBubbleContainer,
  ReviewBubbleContainerWrap,
  ReviewBubbleDescription,
  ReviewBubbleTitle,
} from "../../UI/ReviewBubble.styled";

export interface Props {
  reviews: IReviews[];
  setReviews: React.Dispatch<React.SetStateAction<IReviews[]>>;
}
const ReviewsItem = ({ reviews, setReviews }: Props) => {
  const deletedOneItemReview = async (_id: string) => {
    try {
      if (await reviewsService.deleteReview(_id)) {
        let removeItem = reviews?.filter((render) => render._id !== _id);
        setReviews(removeItem);
      }
    } catch (error) {
      return null;
    }
  };
  //"implements delete review"

  return (
    <div className="review-container" style={{ overflow: "auto" }}>
      {!reviews?.length && (
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
      )}
      <ReviewBubbleContainerWrap>
        {reviews?.map(({ title, description, _id }) => (
          <ReviewBubbleContainer key={_id}>
            <ReviewBubbleTitle>{title}</ReviewBubbleTitle>
            <ReviewBubbleDescription>{description}</ReviewBubbleDescription>
            <DeletedButtonStyle
              background="#DC2D2D"
              width="20px"
              height="20px"
              borderRadius="8rem"
              onClick={() => deletedOneItemReview(_id!)}
            >
              x
            </DeletedButtonStyle>
          </ReviewBubbleContainer>
        ))}
      </ReviewBubbleContainerWrap>
    </div>
  );
};

export default ReviewsItem;
