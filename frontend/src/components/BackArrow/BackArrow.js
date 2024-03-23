import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { APP_ROUTES } from "../../utils/constants";
function BackArrow() {
  return (
    <Link to={APP_ROUTES.HOME} className="backArrow">
      {" "}
      <FontAwesomeIcon icon={faArrowLeft("arrow-left")} />
      {" Retour"}
    </Link>
  );
}
export default BackArrow;
