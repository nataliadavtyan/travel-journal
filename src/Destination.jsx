import React from "react"
import {Place, Image, Location, Title, Text, Date} from "./Destination.style"

export default function Destination(props) {
    return (
        <Place>
            <Image src={props.item.imageUrl} />
            <div>
                <Location>
                    <h3>{props.item.location}</h3>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </Location>
                <Title>{props.item.title}</Title>
                <Date>{props.item.startDate} - {props.item.endDate}</Date>
                <Text>{props.item.description}</Text>
            </div>
        </Place>
    )
}
