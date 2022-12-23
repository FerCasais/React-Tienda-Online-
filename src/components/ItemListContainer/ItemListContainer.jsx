import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <>
      <div className="home">
        <h4
          className="bienvenida"
          style={{ color: props.color ? props.color : "black" }}
        >
          {props.texto}
        </h4>
      </div>
    </>
  );
}

export default ItemListContainer;
