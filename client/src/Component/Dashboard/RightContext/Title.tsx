import React from "react";
import { TitleWarper } from "../../UI/Dashboard.styled";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";

function Title() {
  return (
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
  );
}
export default Title;
