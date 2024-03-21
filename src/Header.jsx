import React from "react"
import logo from "./assets/logo.png"
import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: #43d15a;
    color: #FFFFFF;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 27px;

    img {
        width: 24px;
    }

    h1 {
        font-size: 14.5px;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <img src={logo} />
            <h1>my travel journal</h1>
        </StyledHeader>
    )
}