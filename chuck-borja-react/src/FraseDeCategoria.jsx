import styles from "./FraseDeCategoria.module.css";
import { useEffect, useState } from "react";

export function FraseDeCategoria({ categoria }) {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories
  //https://api.chucknorris.io/jokes/random?category=animal

  const [categorias, setCategorias] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=animal"
    );
    const data = await response.json();
    setCategorias(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (

    <ul className={styles.fraseDeCategoria}>
        <li className={styles.fraseObtenida}>
            <p> {categorias.value} </p>
          <button onClick={fetchPost}> Genera otra nueva</button>
        </li>
    </ul>
  );
}
