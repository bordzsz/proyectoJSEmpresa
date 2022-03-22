import styles from "./FraseDeCategoria.module.css";
import { useEffect, useState } from "react";

export function FraseDeCategoria() {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories
  //https://api.chucknorris.io/jokes/random?category=animal

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random?category=animal")
      .then((result) => result.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  return (
    <h4 className={styles.fraseObtenida}>
      {categorias.value}
    </h4>
  );
}
