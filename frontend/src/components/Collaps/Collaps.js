import React, { useState } from "react";
import arrow_down from "../../assets/arrow_down.png";
import arrow_up from "../../assets/arrow_up.png";
import "./Collaps.scss";

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  //Ajout animation css sur collapse
  const [rotate, setRotate] = useState(false);
  // déclaration d'une variable "poignée" pour la bascule en ouvert ou fermé du menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotate(isOpen ? true : false);
  };
  // console.log(rotate);
  return (
    <div className="CollapseItem">
      <div className="CollapseHeader" onClick={handleToggle}>
        <h2>{title}</h2>
        <span className="Arrow">
          {isOpen ? (
            <img src={arrow_down} alt="Arrow Down" />
          ) : (
            <img
              className={rotate ? "animate_arrow" : ""}
              src={arrow_up}
              alt="Arrow Up"
            />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="CollapseContent animate_collaps">{content}</div>
      )}
    </div>
  );
}

export default CollapseItem;
