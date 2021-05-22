import styled from "styled-components";

export const NewsContainer = styled.div`
  padding: 2rem;
  cursor: pointer;
`;
export const NewsImage = styled.div`
  min-height: 35rem;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  background-color: grey;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const NewsTitle =styled.div`
font-weight: bold;
font-size: 3rem;
text-align: center;
text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

`