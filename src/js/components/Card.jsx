import React  from "react";

const Card = (props) => {
    return (
        <div className="d-flex m-2" id="card">
            <img src={props.image} id="card-img"/>
            <div className="ms-3 d-flex flex-column">
                <h6 className="mt-3 mb-3">{props.name}</h6>
                <span>Status: {props.status}</span>
                <span>Species: {props.species}</span>
                <span>Type: {props.type}</span>
                <span>Origin: {props.origin}</span>
                <span>Location: {props.location}</span>
            </div>
        </div>
    )
}

export default Card;