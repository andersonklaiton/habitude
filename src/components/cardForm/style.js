import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 272px;
  background-color: #fff;
  height: 409px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 1px #9c9c9c;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  h1 {
    text-transform: uppercase;
    font-weight: lighter;
    margin-top: 0;
  }
  input {
    height: 30px;
    width: 70%;
  }
  button {
    background-color: var(--light-blue);
    border-radius: 10px;
    border: none;
    width: 129px;
    height: 35px;
  }
  p {
    margin: 0px auto;
    margin-top: 50px;
    font-size: 12px;
  }
  @media screen and (min-width: 767px) {
    width: 400px;
    height: 536px;
    margin-right: 80px;
    margin-top: 50px;
  }
`;
