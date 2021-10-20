import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 80px;
    @media(min-width:767px){
        margin-left: 260px;
    }
`;

export const NameContainer = styled.div`
    background-color: #9E4636;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 250px;
    width: 100%;
`;

export const SubmitButton = styled.button`
    width: 40%;
    height: 30px;
    font-size: 20px;
    background-color: #9E4636;
    border-radius: 5px;
`;