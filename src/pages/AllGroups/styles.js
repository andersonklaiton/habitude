import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: var(--red);
  border-radius: 10px;
  text-transform: uppercase;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  margin-top: 50px;
  @media (min-width: 767px) {
    width: 75%;
    margin: 50px 265px 0;
  }
`;
export const ContainerGroups = styled.div`
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  display: flex;
  @media (min-width: 767px) {
    margin: 0 265px;
    width: 75%;
  }
`;

