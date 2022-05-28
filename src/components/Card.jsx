import React from 'react'

export default function Card(props) {
  return (
    <div animate={{ x: 100 }} initial={{ x: 0 }} className="card margin">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6 margin-card">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <img
            src={props.image}
            alt="Hight School"
            className="col-sm-6 card-image"
          />
        </div>
      </div>
    </div>
  );
}
