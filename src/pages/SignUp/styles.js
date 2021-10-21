import styled from "styled-components";


export const Container = styled.div`
  
  height: 400px;
  border: 1px solid transparent;
  background-repeat: no-repeat;
  position:absolute;
  top: -20px;
  left: 15px;
  right: 100px;
  
`;

export const ContainerImage = styled.div`


height: 100%;
  border: 1px solid transparent;
  background-repeat: no-repeat;
  @media(min-width:767px){
  position:absolute;
  left:-250px;
  top: 0;
  width: 60%;
  img{
    width: 145%;
    height: 100%;
    overflow: hidden;
  }
}
`
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
`;
export const RedirectMessage = styled.div`
  color: #120c5a;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border-radius: 10px;
  background-color: #a9b7bd;
  color: #000000;
  border: none;
  padding: 10px 5px;
`;
