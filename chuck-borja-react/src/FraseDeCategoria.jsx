import styles from "./FraseDeCategoria.module.css";
import { useEffect, useState } from "react";
import { ListaSeleccionada } from "./ListaSeleccionada";

export function FraseDeCategoria({ categoria }) {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories
  //https://api.chucknorris.io/jokes/random?category=animal

  const [categorias, setCategorias] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoria}`
    );
    const data = await response.json();
    setCategorias(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (

    <><ul className={styles.fraseDeCategoria}>
      <li className={styles.fraseObtenida}>
        <p> {categorias.value} </p>
        <button onClick={fetchPost}> Generar nueva frase de esa categoría.</button>
      </li>
    </ul><div><div className={styles.containerCajas}><img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" /><h3>Lista de Frases Seleccionadas</h3></div><ListaSeleccionada frase={categorias}/></div></>
  );
}
