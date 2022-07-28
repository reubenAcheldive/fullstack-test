import React, { useEffect, useState } from "react";
import { IReviews } from "../../interface/Reviews.interface";

import { DashboardStyled } from "../UI/Dashboard.styled";

import LeftContext from "./LeftContext/LeftContext";
import RightContext from "./RightContext/RightContext";
import { reviewsService } from "../../api/reviews.service";

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
        <RightContext />
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
// "handle with integration with api to create Reviews"