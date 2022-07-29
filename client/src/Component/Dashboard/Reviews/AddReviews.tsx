import React, { useState } from "react";
import S from "styled-components";
import { IReviews } from "../../../interface/Reviews.interface";
import { isEmpty } from "../../../utils/_NotEmptyObject";
import { AddReviewsContainerStyled, ButtonStyled, CountWordStyled, DiscretionInputStyled, StretchLineStyled, TitleInputStyled } from "../../UI/ReviewsStyle/AddReviews.styled";
import { reviewsService } from "./../../../api/reviews.service";


export interface Props {
  reviews: IReviews[];
  setReviews: React.Dispatch<React.SetStateAction<IReviews[]>>;
}
const AddReviews = ({ setReviews, reviews }: Props) => {
  const [values, setValues] = useState<IReviews>({
    title: "",
    description: "",
  });
  const getValuesToCreateNewReview = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (value.trim() === "") return setValues({ title: "", description: "" });
    switch (name) {
      case "title":
        return value.length < 255 && setValues({ ...values, title: value });
      case "description":
        return (
          value.length < 255 && setValues({ ...values, description: value })
        );
      default:
    }
  };

  const createNewReviewsHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (isEmpty(values)) {
      try {
        const { data } = await reviewsService.createReview({ ...values });

        setReviews([...reviews, data]);
        setValues({ title: "", description: "" });
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={(e) => createNewReviewsHandler(e)}>
      <AddReviewsContainerStyled>
        <div style={{ display: "flex" }}>
          <TitleInputStyled
            placeholder="Enter review title"
            onChange={getValuesToCreateNewReview}
            name="title"
            value={values.title}
          />
          <CountWordStyled>
            {" "}
            {values.title.length + values.description.length} / 255
          </CountWordStyled>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "13px",
            }}
          >
            <ButtonStyled type="submit" disabled={!isEmpty(values)}>
              Add
            </ButtonStyled>
            <DiscretionInputStyled
              placeholder="Write your review text..."
              onChange={getValuesToCreateNewReview}
              name="description"
              value={values.description}
            />
          </div>
          <StretchLineStyled />
        </div>
      </AddReviewsContainerStyled>
    </form>
  );
};

export default AddReviews;
