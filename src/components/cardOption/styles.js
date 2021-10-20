import styled from "styled-components"

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ButtonEnter = styled.button`
    width: 250px;
    height: 80px;
    border-radius: 10px;
    border: 2px solid var(--red);
    background-color: var(--red);
`
export const ButtonCreate = styled.button`
    width: 250px;
    height: 80px;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid var(--red);
    margin-top: 30px;
`