import React from "react";
import S from "styled-components";
import AddReviews from "./Reviews/AddReviews";
const DashboardStyled = S.div`
display: flex;
flex-direction: row;
align-items: flex-start;

width: 830px;
height: 549px;

`;

const SideRightPage = S(DashboardStyled)`

padding: 20px 20px 0px;
width: 470px;
height: 100%;
background: linear-gradient(72.2deg, #39454C 0%, #64757E 100%);
border-radius: 20px 0px 0px 20px;
`;

const SideLeftPage = S(DashboardStyled)`
padding: 40px;
gap: 40px;
width: 360px;
height: 100%;
background:  #39454C;
border-radius: 0px 20px 20px 0px;
`;

const Dashboard = () => {
  return (
    <>
      <DashboardStyled>
        <SideRightPage>
          <AddReviews />
        </SideRightPage>
        <SideLeftPage />
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
