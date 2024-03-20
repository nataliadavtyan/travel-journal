import React from "react"
import logo from "./assets/logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} />
            <h1>my travel journal</h1>
        </header>
    )
}