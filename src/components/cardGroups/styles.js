import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 156px;
  width: 277px;
  border: 2px solid black;
  border-radius: 14px;
`;

export const NameContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: #4d98c7;
`;

export const DataButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 100%;
  color: #a6a6a6;
  margin-left: 5px;
`;