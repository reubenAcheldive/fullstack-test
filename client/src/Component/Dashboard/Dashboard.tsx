import React from "react";
import S from "styled-components";
import {
  DashboardStyled,
  SideLeftPage,
  SideRightPage,
  TitleWarper,
} from "../UI/Dashboard.styled";
import { GlobalParagraphStyle } from "../UI/GlobalParagraph.styled";
import { TagContainer, TagContext } from "../UI/TagsButton";
import AddReviews from "./Reviews/AddReviews";
import ReviewsItem from "./Reviews/ReviewsItem";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiMessageAdd, BiX } from "react-icons/bi";
import { ButtonStyled } from "../UI/Button";
const Dashboard = () => {
  return (
    <>
      <DashboardStyled>
        <SideLeftPage>
          <AddReviews />
          <ReviewsItem />
        </SideLeftPage>
        <SideRightPage>
          <TitleWarper>
            <GlobalParagraphStyle
              LineHeight="29px"
              background=""
              color="#FF206F"
              fontWeight="700"
              height="29px"
              fontSize="22px"
              width="12px"
              flexGrow="0"
              order="0"
            >
              0
            </GlobalParagraphStyle>

            <GlobalParagraphStyle
              LineHeight="29px"
              background=""
              color="#39454C"
              fontWeight="700"
              height="29px"
              fontSize="22px"
              width="100%"
              flexGrow="0"
              order="0"
            >
              app reviews
            </GlobalParagraphStyle>
          </TitleWarper>
          <span>
            <GlobalParagraphStyle
              style={{ textAlign: "start" }}
              LineHeight="18px"
              background=""
              color="#64757E"
              fontWeight="400"
              height="54px"
              fontSize="14px"
              width="271px"
              flexGrow="0"
              order="0"
            >
              Write the texts our accounts will use when reviewing your app on
              the App Store (Minimum 50 reviews).
            </GlobalParagraphStyle>
          </span>
          <span
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TagContainer
              alignItems="baseline"
              background="#EBEFF7"
              justifyContent="space-around"
              borderRadius="10px"
              flex=""
              display="flex"
              flexDirection="row"
              flexGrow="1"
              gap="5px"
              height="45px"
              order="0"
              padding="10px 10px 11px"
              width="280px"
            >
              <span>?</span>
              <TagContext>Learn how to add reviews</TagContext>
              <GlobalParagraphStyle opacity="0.5"> &gt;</GlobalParagraphStyle>
            </TagContainer>

            <TagContainer
              alignItems="baseline"
              background="#EBEFF7"
              justifyContent="space-around"
              borderRadius="10px"
              flex=""
              display="flex"
              flexDirection="row"
              flexGrow="1"
              gap="5px"
              height="45px"
              order="0"
              padding="10px 10px 11px"
              width="280px"
            >
              <AiOutlineFileAdd />

              <TagContext>Import from file</TagContext>
              <GlobalParagraphStyle opacity="0.5"> &gt;</GlobalParagraphStyle>
            </TagContainer>
            <TagContainer
              alignItems="baseline"
              background="#EBEFF7"
              justifyContent="space-around"
              borderRadius="10px"
              flex=""
              display="flex"
              flexDirection="row"
              flexGrow="1"
              gap="5px"
              height="45px"
              order="0"
              padding="10px 10px 11px"
              width="280px"
            >
              <BiMessageAdd />
              <TagContext> +10 generic ReviewsItem </TagContext>
              <GlobalParagraphStyle opacity="0.5"> &gt;</GlobalParagraphStyle>
            </TagContainer>
          </span>
          <span
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TagContainer
              alignItems="center"
              background="#FFFFFF"
              justifyContent="flex-start"
              border="1px solid #FFDDDD"
              flex=""
              display="flex"
              flexDirection="row"
              flexGrow="1"
              gap="21px"
              height="45px"
              order="0"
              padding="10px 20px 11px 10px"
              width="280px"
              borderRadius="10px"
            >
              <BiX style={{ color: "#DC2D2D" }} />
              <TagContext color="#DC2D2D"> Clear all reviews</TagContext>
            </TagContainer>
          </span>
          <span>
            <ButtonStyled
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="10px 20px 11px"
              gap="5px"
              width="280px"
              height="45px"
              background="#DDE7F0"
              borderRadius="10px"
              color="rgba(255, 255, 255, 0.5);"
            >
              Save
            </ButtonStyled>
          </span>
        </SideRightPage>
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
