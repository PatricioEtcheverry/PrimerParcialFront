import React, { Component } from 'react'
import Historial from './Historial'
import Swal from "sweetalert2"

export default class Historia extends Component {
  constructor() {
    super()
    this.state = {
      historiaActual: '1',
      capitulo: '',
      opcionesElegidas: [],
    }
  }

  componentDidMount() {
    this.setState({ capitulo: this.encontrarCapitulo() })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.historiaActual !== this.state.historiaActual) {
      this.setState({ capitulo: this.encontrarCapitulo() })
    }
  }

  encontrarCapitulo() {
    const capituloId =
      this.state.historiaActual === '1'
        ? this.state.historiaActual
        : (
            this.state.historiaActual +
            this.state.opcionesElegidas[this.state.opcionesElegidas.length - 1]
          ).toLowerCase()

    const capituloActual = this.props.data.find(
      (data) => data.id === capituloId
    )
    return capituloActual
  }


  handlerClick(letra) {
    if (this.state.historiaActual < 5) {
      this.setState({
        opcionesElegidas: this.state.opcionesElegidas.concat(letra),
        historiaActual: (Number(this.state.historiaActual) + 1).toString(),
      })
    } else{alert("Felicidades llegaste al final de la historia")}
  }

  render() {
    return (
      <div className="layout">
        <h1 className = "historia">{this.state.capitulo.historia}</h1>
        <div className = "opciones">
          <div className="opcion">
            <button className="botones" onClick={() => this.handlerClick("A")}> A </button>
            <h2>{this.state.capitulo !== '' ? this.state.capitulo.opciones.a : ''}</h2>
          </div>
          <div className = "opcion">
            <button className="botones" onClick={() => this.handlerClick("B")}> B </button>
            <h2>{this.state.capitulo !== '' ? this.state.capitulo.opciones.b : ''}</h2>
          </div>
        </div>
        <Historial opcionesElegidas={this.state.opcionesElegidas} />
      </div>
    )
  }
}