import React, { Component } from "react";

export default class Historial extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Seleccion anterior: {this.props.opcionesElegidas[this.props.opcionesElegidas.length - 1]}</h3>
          <h4>Historial de opciones elegidas:</h4>
          <ul>
            {this.props.opcionesElegidas.map((eleccion, index) => (
              <li key={index}> {eleccion} </li>
            ))}
          </ul>
      </div>
    );
  }
}
