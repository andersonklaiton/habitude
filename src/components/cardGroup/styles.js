import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 156px;
  width: 277px;
  margin: 20px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
`;

export const NameContainer = styled.div`
  height: 45px;
  width: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: #4d98c7;
`;

export const DataButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  /* width: 50%; */
  height: 100%;
  color: #a6a6a6;
  margin-left: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 50%;
  height: 100%;
  margin-right: 5px;
  p {
    color: var(--green);
    cursor: pointer;
  }
`;
