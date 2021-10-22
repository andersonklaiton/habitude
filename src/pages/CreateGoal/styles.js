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
    
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 12%;
    justify-content: space-around;
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
    width: 20%;
    height: 30px;
    font-size: 20px;
    background-color: #A9B7BD;
    border-radius: 5px;

`;
