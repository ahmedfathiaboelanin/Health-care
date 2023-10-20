/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./Buttons.css"
export function BtnLink(props) {
  return (
    <Link to={props.path} className={`btn-link ${props.class}`}>
          {props.children}
    </Link>
  );
}
