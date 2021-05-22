import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex: 1;
min-height: 90vh;
text-transform: uppercase;
font-size: 2rem;
`
export const ContainerCategory= styled.div`
transition-duration: 500ms;
cursor: pointer;
color: grey;
&:hover{
    color: white;
}
`