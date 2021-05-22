import React from "react";
import {
  NewsContainer,
  NewsImage,
  NewsData,
  NewsTitle,
  SmallData,
  NewsDate,
  NewsSource,
  NewsContent,
  UrlCircle,
  UrlCircleContainer,
} from "./styles";

export default function FullScreenNews(props) {
  const { content, publishedAt, source, title, urlToImage, url } =
    props.location.dataProps;
  return (
    <NewsContainer>
      <NewsImage style={{ backgroundImage: `url(${urlToImage})` }}></NewsImage>
      <NewsData>
        <SmallData>
          <NewsDate>{publishedAt.slice(0, 10)}</NewsDate>
          <NewsSource>{source.name}</NewsSource>
        </SmallData>
        <NewsTitle>{title}</NewsTitle>
        <NewsContent>{content}</NewsContent>
        <UrlCircleContainer>
          <UrlCircle
            onClick={() => {
              window.open(url);
            }}
          >
            <div>Read News</div>
          </UrlCircle>
        </UrlCircleContainer>
      </NewsData>
    </NewsContainer>
  );
}
