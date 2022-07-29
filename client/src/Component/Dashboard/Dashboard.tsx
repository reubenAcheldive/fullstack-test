import React, { useEffect, useState } from "react";
import { IReviews } from "../../interface/Reviews.interface";

import { DashboardStyled } from "../UI/Dashboard.styled";

import LeftContext from "./LeftContext/LeftContext";

import { reviewsService } from "../../api/reviews.service";
import RightContext from "./RightContext/RightContext";

const Dashboard = () => {
  const [reviews, setReviews] = useState<IReviews[]>([]);

  const fetchReviews = async () => {
    try {
      const { data } = await reviewsService.fetchReviews();
      setReviews(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchReviews();
  }, []);




  return (
    <>
      <DashboardStyled>
        <LeftContext reviews={reviews} setReviews={setReviews} />
        <RightContext reviews={reviews}  setReviews={setReviews} />
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
// "handle with integration with api to create Reviews"