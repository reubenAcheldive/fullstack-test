import React from "react";

import { AiOutlineFileAdd } from "react-icons/ai";
import { BiMessageAdd, BiX } from "react-icons/bi";
import { ButtonStyled } from "../../UI/Button";
import { SideRightPage } from "../../UI/Dashboard.styled";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";
import { TagContainer, TagContext } from "../../UI/TagsButton";
import Options from "./Options";
import Title from "./Title";


const RightContext = () => {
  return (
    <SideRightPage>
      <Title />
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
          Write the texts our accounts will use when reviewing your app on the
          App Store (Minimum 50 reviews).
        </GlobalParagraphStyle>
      </span>
      <Options/>
      <span style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
  );
};

export default RightContext;
