import React from "react";

const Card = (props) => {
    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.quantity}</h6>
                    <p className="card-text">{props.description}</p>
                    <button onClick={() => props.onDelete(props.id)} className="btn btn-outline-danger">Elimina</button>
                </div>
            </div>
        </div>);
}

export default Card;