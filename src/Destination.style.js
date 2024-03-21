import styled from "styled-components"

const Place = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F5F5F5;
    padding-block: 18px;
`

const Image = styled.img`
    width: 125px;
    height: 168px;
    object-fit: cover;
    border-radius: 5px;
    display: block;
    margin-right: 19px;
`
const Location = styled.div`
    display: flex;
    margin-bottom: 6px;

    h3 {
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.17em;
        margin-right: 12px;
    }

    a {
        text-underline-offset: 2px;
        text-decoration-skip-ink: none;
        color: #918E9B;
    }
`

const Title = styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
`

const Text = styled.p`
    line-height: 1.5;
    max-width: 325px;
`

const Date = styled(Text)`
    font-weight: 700;
    margin-bottom: 9px;
`

export {Place, Image, Location, Title, Text, Date}