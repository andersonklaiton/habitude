import styled from "styled-components"

export const Container = styled.form`
    margin-top: 100px;
    margin-left: 10px;
    @media(min-width:767px){
        margin-left: 300px;
    }
`
export const Button= styled.button`
    background-color: var(--red);
    width: 80px;
    height: 30px;
    border-radius: 10px;
`