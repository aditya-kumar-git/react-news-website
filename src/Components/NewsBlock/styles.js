import styled from "styled-components";

export const NewsImage = styled.div`
  min-height: 15rem;
  min-width: 25rem;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  background-color: grey;
`;

export const NewsContainer =styled.div`
display: flex;
padding: 2rem;
cursor: pointer;
`
export const NewsData =styled.div`
padding-left: 2rem;
box-sizing: border-box;
color: grey;
transition-duration: 500ms;
&:hover{
    color: white;
}
`
export const NewsTitle =styled.div`
font-weight: bold;
font-size: 1.5rem;
`
export const SmallData =styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 2rem;
font-weight: 300;
`
export const NewsDate =styled.div``
export const NewsSource =styled.div``
export const Divider =styled.div`
margin-left: 1rem;
margin-right: 1rem;
`
