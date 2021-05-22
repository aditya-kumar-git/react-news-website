import styled from "styled-components";

export const NewsImage = styled.div`
  min-height: 35rem;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`;

export const NewsContainer = styled.div`
  padding: 3rem;
`;
export const NewsData = styled.div`
  box-sizing: border-box;
`;
export const NewsContent = styled.div`
  font-size: 1rem;
  text-align: center;
`;
export const NewsTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const SmallData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  font-weight: 300;
`;
export const UrlCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16rem;

`;
export const UrlCircle = styled.div`
  background-color: red;
  height: 8rem;
  width: 8rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 500ms;
  &:hover{
      height: 9rem;
      width: 9rem;
  }
`;
export const NewsDate = styled.div``;
export const NewsSource = styled.div``;
export const Divider = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;
