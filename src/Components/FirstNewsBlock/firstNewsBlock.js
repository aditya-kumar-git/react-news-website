import React from 'react'
import { NewsContainer,NewsImage,NewsTitle } from './styles'

export default function FirstNewsBlock(props) {
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
            <NewsImage style={{ backgroundImage: `url(${urlToImage})` }}>
                <NewsTitle>{title}</NewsTitle>
            </NewsImage>
        </NewsContainer>
    )
}
