import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";
import Formulario from "./componentes/Formulario";
import axios from "axios";
import Letra from "./componentes/Letra";
import InfomacionArtista from "./componentes/InfomacionArtista";
import Error from "./componentes/Error";

function App() {
  const [data, setdata] = useState({});
  const [letra, setletra] = useState("");
  const [infArtista, setinfArtista] = useState({});
  const { Artista, Cancion } = data;
  const [error, seterror] = useState(true);
  const [activador, setactivador] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length === 0) return;

    const consultarApi = async () => {
      const url = `https://api.lyrics.ovh/v1/${Artista}/${Cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${Artista}`;

      const [letra, infor] = await Promise.all([axios(url), axios(url2)]);

      setletra(letra.data.lyrics);
      setinfArtista(infor.data.artists[0]);
    };
    consultarApi();
    verificardatos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Artista, Cancion, data, infArtista]);

  const verificardatos = () => {
    if (Object.keys(infArtista).length === 0 || letra.trim() === "") {
      seterror(true);
      return;
    } else {
      seterror(false);
    }
  };

  return (
    <Fragment>
      <div className="container-2">
        <Formulario setdata={setdata} setactivador={setactivador} />
      </div>
      <div className="container">
        <div className="row">
          {activador ? (
            error ? (
              <Error mensaje="No se encontraron datos relaccionados con la busqueda" />
            ) : (
              <div>
                <div className="one-half column">
                  <Letra letra={letra} />
                </div>
                <div className="one-half column">
                  <InfomacionArtista infArtista={infArtista} />
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
