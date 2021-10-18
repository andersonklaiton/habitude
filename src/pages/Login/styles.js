import banner from "../../assets/images/banner.jpg"
import styled from "styled-components";
export const Container = styled.div`
  background-image: url(${banner});
  height: 400px;
  border: 1px solid transparent;
  background-repeat: no-repeat;
`;
export const Form = styled.form`
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 1px #9c9c9c;
  width: 90vw;
  max-width: 609px;
  margin: 23vh auto 0 auto;
  transition: 0.5s;
  h1 {
    margin: 25px 0;
    text-transform: uppercase;
  }
  button {
    margin: 30px 0;
  }
  button:hover {
    filter: brightness(0.5);
  }
  div + div {
    margin-top: 20px;
  }
`
export const Button = styled.button`
  border-radius: 10px;
  background-color: #a9b7bd;
  color: #000000;
  border: none;
  padding: 10px 5px;
`;
export const RedirectMessage = styled.div`
  color: #120c5a;
  margin-bottom: 20px;
`;