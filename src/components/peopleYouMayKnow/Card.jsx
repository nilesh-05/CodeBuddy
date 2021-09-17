import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="d-flex bg-light my-4 top">
        <figure className="img-sec">
          <img src="" alt="" />
        </figure>
        <hr />
        <div className="info_sec py-3 d-flex flex-column">
          <div className="name">
            <h3>{props.name}</h3>
            <figcaption className="mt-n-3">helloWorld.com</figcaption>
          </div>
          <div className="skills mt-3 mx-1">
            <h5>Skillset</h5>
            <figcaption>skill1,skill2,skill3</figcaption>
          </div>
        </div>
        <div className="view_sec d-flex flex-column">
          <button className="btn btn-lg btn-success">ViewProfile</button>
          <button className="btn btn-lg btn-success">ViewProfile</button>
        </div>
      </div>
    </>
  );
};
export default Card;
