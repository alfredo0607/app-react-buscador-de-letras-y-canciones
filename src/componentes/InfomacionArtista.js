/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";

export default function InfomacionArtista({ infArtista }) {
  const {
    strArtist,
    intBornYear,
    intMembers,
    strArtistClearart,
    strBiographyES,
    strCountry,
    strStyle,
  } = infArtista;

  return (
    <Fragment>
      <div className="con">
        <div className="contendor-infor">
          <h2>{strArtist}</h2>
          <hr className="h" />
        </div>
        <div className="listas">
          <ul>
            <li>Año de Creacion :{intBornYear}</li>
            <li>Numero de Integrantes :{intMembers}</li>
            <li> Pais :{strCountry}</li>
            <li> Genero :{strStyle}</li>
          </ul>
        </div>
        <img className="image" src={strArtistClearart} />
        <p className="biografia">{strBiographyES}</p>
      </div>
    </Fragment>
  );
}
