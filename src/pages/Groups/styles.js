import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  grid-gap: 15px;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  @media (min-width:767px) {
    width: 75%;
    margin: 140px 265px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
