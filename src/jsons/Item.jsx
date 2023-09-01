import React from "react";

const Item = (props) => {
  return (
    <div className="d-flex card m-2" style={{ width: "45%", height: "300px" }}>
      <img
        src={props.thumbnail}
        className="card-img-top"
        alt="..."
        width="200px"
        height="150px"
      />
      <div className="card-body">
        <h6 className="card-title">
          <div className="text-start">
            <b>Product:</b>
            <i> {props.title}</i>
          </div>
        </h6>
        <h6 className="card-text d-flex justify-content-between">
          <div>
            <b>Rating:</b>
            <i> {props.rating}</i>
          </div>
          <div>
            <b>Price:</b>
            <i> {props.price}</i>
          </div>
        </h6>
        <h6 className="card-text text-start text-wrap">
          <div>
            <b>Description:</b>
          </div>
          <i> {props.description}</i>
        </h6>
      </div>
    </div>
  );
};

export default Item;
