import styles from "./FraseDeCategoria.module.css";
import { useEffect, useState } from "react";
import { ListaSeleccionada } from "./ListaSeleccionada";

export function FraseDeCategoria({ categoria }) {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories
  //https://api.chucknorris.io/jokes/random?category=animal

  const [categorias, setCategorias] = useState([]);
  const [frases, setFrases] = useState([]); //Dentro de useState podemos meter el localStorage y así cargar las frases guardads desde ahi

  const fetchPost = async () => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoria}`
    );
    const data = await response.json();
    setCategorias(data);
    if (data.value != 'null ') {
      setFrases(frases.concat(data.value));
    }
    if (frases[0] == 'null ') {
      frases.splice(0, 1);
    }
    const frasesLocal = localStorage.getItem("frases");
    localStorage.setItem("frases", frasesLocal + " | " + data.value);
  };

  useEffect(() => {
    if (localStorage.getItem("frases") != null) {
      var verFrasesLocal = localStorage.getItem("frases").split("|");
      if(verFrasesLocal[0] == 'null '){
        verFrasesLocal.splice(0,1);
      }
      verFrasesLocal.forEach(element => {
        frases.push(element)
      });
    }
  }, []);

  return (
    <>
      <ul className={styles.fraseDeCategoria}>
        <li className={styles.fraseObtenida}>
          <p> {categorias.value} </p>
          <button className={styles.botonGenerar} onClick={fetchPost}>
            {" "}
            Generar nueva frase de esa categoría.
          </button>
        </li>
      </ul>
      <div className={styles.containerTodo}>
        <div className={styles.containerCajas}>
          <img
            src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
            alt=""
          />
          <h3>Lista de Frases Seleccionadas</h3>
        </div>
        <ListaSeleccionada frase={frases} />
      </div>
    </>
  );
}
