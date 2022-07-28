import React from "react";
import { IReviews } from "../../../interface/Reviews.interface";
import { SideLeftPage } from "../../UI/Dashboard.styled";
import AddReviews from "../Reviews/AddReviews";
import ReviewsItem from "../Reviews/ReviewsItem";
export interface Props {
  reviews: IReviews[];
  setReviews: React.Dispatch<React.SetStateAction<IReviews[]>>
}
const LeftContext = ({ reviews,setReviews}: Props) => {
  return (
    <SideLeftPage>
      <AddReviews  setReviews={setReviews} reviews={reviews}/>
      <ReviewsItem reviews={reviews} />
    </SideLeftPage>
  );
};

export default LeftContext;
