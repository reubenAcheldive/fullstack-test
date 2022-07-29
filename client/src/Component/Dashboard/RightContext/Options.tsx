import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GlobalParagraphStyle } from "../../UI/GlobalParagraph.styled";
import { TagContainer, TagContext } from "../../UI/TagsButton";
import { BiMessageAdd } from "react-icons/bi";
import { useRef } from "react";
import CSVReader from "react-csv-reader";
interface Props {
  generatedRandomReviewsHandler: () => void;
  handleForce: (data: any, fileInfo: any) => void;
}
const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header: string) => header.toLowerCase().replace(/\W/g, "_"),
};

function Options({ generatedRandomReviewsHandler, handleForce }: Props) {
  const fileUpload = useRef<any>(null);

  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <CSVReader
        cssClass="react-csv-input"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
        inputRef={fileUpload}
        inputStyle={{ opacity: "0" }}
      />

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
        onClick={() => {
          fileUpload?.current.click();
        }}
      >
        <AiOutlineFileAdd />

        <TagContext>Import from file</TagContext>
        <GlobalParagraphStyle opacity="0.5"> &gt;</GlobalParagraphStyle>
      </TagContainer>
      <TagContainer
        onClick={generatedRandomReviewsHandler}
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
        <TagContext>+10 generic reviews </TagContext>
        <GlobalParagraphStyle opacity="0.5"> &gt;</GlobalParagraphStyle>
      </TagContainer>
    </span>
  );
}

export default Options;
