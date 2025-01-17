import React from "react";
import HolidayCard from "../Styles/HolidayCard.scss";
/*
npm i bootstrap
npm i reactstrap react react-dom
*/

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const CardGrid = (props) => {
  return (
    <div className="HolidayCard">
      <div className="frame">
        <img src={props.ImageLink} alt="Card image cap"></img>
        <ul>
          <li>
            <strong>{props.HebName}</strong>
          </li>
          <li>
            <strong>{props.EngName}</strong>
          </li>
          <li>
            <strong className="subtitle">{props.Date}</strong>
          </li>
          <li>
            <strong className="subtitle">{props.Info}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardGrid;
