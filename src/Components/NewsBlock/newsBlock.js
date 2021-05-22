import React from "react";
import {
  NewsContainer,
  NewsImage,
  NewsData,
  NewsTitle,
  SmallData,
  NewsDate,
  NewsSource,
  Divider,
} from "./styles";

export default function NewsBlock(props) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    urlToImage,
    url,
  } = props.data;
  return (
    <NewsContainer>
      <NewsImage style={{ backgroundImage: `url(${urlToImage})` }}></NewsImage>
      <NewsData>
        <NewsTitle>{title}</NewsTitle>
        <SmallData>
          <NewsDate>{publishedAt.slice(0,10)}</NewsDate>
          <Divider>|</Divider>
          <NewsSource>{source.name}</NewsSource>
        </SmallData>
      </NewsData>
    </NewsContainer>
  );
}
