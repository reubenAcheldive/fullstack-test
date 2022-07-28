import React, { useState } from "react";
import S from "styled-components";
import { IReviews } from "../../../interface/Reviews.interface";
import { isEmpty } from "../../../utils/_NotEmptyObject";
import { reviewsService } from "./../../../api/reviews.service";

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
display: flex;
width: 390px;
height: 1px;
background: #EBEFF7;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export const DiscretionInputStyled = S.input`
width: 313px;
height: 18px;
font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
color:#39454C;
flex: none;
order: 0;
flex-grow: 0;
outline: none;
border: none;
::placeholder{
  color: #C4D2DC;
}
`;

const ButtonStyled = S.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px 11px;
gap: 5px;
width: 64px;
height: 45px;
background: ${({ disabled }) => (!disabled ? "#FF206F" : "#DDE7F0")};
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
border:none;
color: #FFFFFF;
display: flex;
align-items: center;
text-align: center;
font-weight: 700;
font-size: 14px;
line-height: 18px;
`;
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

    switch (name) {
      case "title":
        return value.length < 255 && setValues({ ...values, title: value });
      case "description":
        return value.length < 255  && setValues({ ...values, description: value });
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
        setValues({ title: '', description: '' });
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
          <CountWordStyled> {values.title.length+values.description.length} / 255</CountWordStyled>
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
