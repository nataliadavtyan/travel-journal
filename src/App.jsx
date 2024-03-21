import React from "react"
import Header from "./Header"
import Destination from "./Destination"
import data from "./data.js"
import styled from "styled-components"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function App() {
    const places = data.map(x => {
        return (
            <Destination 
                key={x.title}
                item={x}
            />
        )
    })
    
    return (
        <div>
            <Header />
            <Main>
                {places}
            </Main>
        </div>
    )
}