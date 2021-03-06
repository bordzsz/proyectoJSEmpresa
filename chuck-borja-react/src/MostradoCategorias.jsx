import { useEffect, useState } from "react";
import { FraseDeCategoria } from "./FraseDeCategoria";
import { ListaSeleccionada } from "./ListaSeleccionada";
import styles from "./MostradoCategorias.module.css";

export function MostradoCategorias() {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories
  //https://api.chucknorris.io/jokes/random?category=animal

  const [categorias, setCategorias] = useState([]);
  const [valorCategorias, setValorCategorias] = useState([]);

  const categoriaSeleccionada = (e) => {

    setValorCategorias(e.target.value);

  };

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((result) => result.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  return (
    <>
      <ul className={styles.listaCategorias}>
        {categorias.map((categoria, index) => (
          <button
            id={index}
            value={categoria}
            className={styles.botonCategoria}
            onClick={categoriaSeleccionada}
          >
            {categoria}
          </button>
        ))}
      </ul>

      <div className={styles.container}>
        <div className={styles.containerCajas}>
          <img
            src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
            alt=""
          />
          <h3>Frase de la categoría</h3>
          
        </div>
        <h4>Categoría seleccionada: <span className={styles.textoCategoria}>{valorCategorias}</span></h4>
        <FraseDeCategoria categoria={valorCategorias} />
      </div>
    </>
  );
}

