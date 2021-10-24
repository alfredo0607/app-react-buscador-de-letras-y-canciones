import React, { useState, Fragment } from "react";
import Error from "./Error";

export default function Formulario({ setdata, setactivador }) {
  const [busqueda, setbusuqeda] = useState({
    Artista: "",
    Cancion: "",
  });
  const [error2, seterror] = useState(false);

  const AgregarBusqueda = (e) => {
    setbusuqeda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const { Artista, Cancion } = busqueda;

  const EnviarDatos = (e) => {
    e.preventDefault();
    if (Artista.trim === "" || Cancion.trim === "") {
      seterror(true);
      return;
    }
    seterror(false);
    setTimeout(() => {
      setactivador(true);
    }, 800);

    setdata(busqueda);
  };

  return (
    <Fragment>
      <div className="titulo-contenedor">
        <h1 className="titulo">Buscador de letras</h1>
      </div>
      {error2 ? <Error mensaje="Todos los campos deben estar llenos" /> : null}

      <form className="formulario" onSubmit={EnviarDatos}>
        <label className="label">Artista : </label>
        <input
          className="te"
          type="text"
          name="Artista"
          placeholder="Nombre del Artista"
          onChange={AgregarBusqueda}
          value={Artista}
        />

        <label className="label">Cancion : </label>
        <input
          className="te"
          type="text"
          name="Cancion"
          placeholder="Cancion"
          onChange={AgregarBusqueda}
          value={Cancion}
        />

        <button className="button-primary" type="submit">
          Buscar
        </button>
      </form>
    </Fragment>
  );
}
