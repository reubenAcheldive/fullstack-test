import React from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai';
import { GlobalParagraphStyle } from '../../UI/GlobalParagraph.styled';
import { TagContainer, TagContext } from '../../UI/TagsButton';
import { BiMessageAdd } from 'react-icons/bi';


function Options({generatedRandomReviewsHandler}:{generatedRandomReviewsHandler:() => void}) {
    return (
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
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

export default Options