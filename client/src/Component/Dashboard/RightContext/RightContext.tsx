import React, { useCallback, useEffect, useState } from "react";

import { IReviews } from "../../../interface/Reviews.interface";
import { ButtonStyled } from "../../UI/Button";
import { SideRightPage } from "../../UI/Dashboard.styled";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";
import { StretchLineStyled } from "../../UI/ReviewsStyle/AddReviews.styled";
import { TagContainer, TagContext } from "../../UI/TagsButton";
import Options from "./Options";
import Title from "./Title";
import { generatedRandomReviews } from "./../../../utils/generatedReviews";
import { texts, titles } from "../../../generic-reviews";
import { BiX } from "react-icons/bi";
import { reviewsService } from "../../../api/reviews.service";

const RightContext = ({
  reviews,
  setReviews,
}: {
  reviews: IReviews[];
  setReviews: React.Dispatch<React.SetStateAction<IReviews[]>>;
}) => {
  const [csvData, setCsvData] = useState<{ title: string; text: string }[]>();

  const generatedRandomReviewsHandler = () => {
    const a = generatedRandomReviews(texts, titles);
    setReviews(a);
  };
  const [isCanSave, setIsCanSave] = useState<boolean>(false);
  const handleForce = (data: any, fileInfo: any) => setCsvData(data);
  useEffect(() => {
    if (csvData?.length) {
      setIsCanSave(true);
    }
  }, [csvData]);

  const getFileCsvDataHandler = () => {
    const normalizeImport = csvData?.map((csv, i) => {
      return {
        title: csv.title,
        description: csv.text,
      };
    });
    if (normalizeImport) {
      setReviews(normalizeImport);
      setIsCanSave(false);
    }
  };
  const clearAndDeleteReviewsFromDbHandler = async () => {
    try {
      setReviews([]);
      await reviewsService.deleteAllReviews();
    } catch (error:any) {
      return new Error(error?.message);
    }
  };

  return (
    <SideRightPage>
      <Title reviews={reviews} />
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
      <Options
        handleForce={handleForce}
        generatedRandomReviewsHandler={generatedRandomReviewsHandler}
      />
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
          onClick={() => clearAndDeleteReviewsFromDbHandler()}
        >
          <BiX style={{ color: "#DC2D2D" }} />
          <TagContext color="#DC2D2D"> Clear all reviews</TagContext>
        </TagContainer>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          gap: "20px",
        }}
      >
        <StretchLineStyled style={{ width: "280px", background: "#EBEFF7" }} />
        <ButtonStyled
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="10px 20px 11px"
          gap="5px"
          width="280px"
          height="45px"
          background={isCanSave ? "#FF206F" : "#DDE7F0"}
          borderRadius="10px"
          color={isCanSave ? "#FFF" : "rgba(255, 255, 255, 0.5)"}
          onClick={getFileCsvDataHandler}
          disabled={!isCanSave}
        >
          Save
        </ButtonStyled>
      </span>
    </SideRightPage>
  );
};
export default RightContext;
