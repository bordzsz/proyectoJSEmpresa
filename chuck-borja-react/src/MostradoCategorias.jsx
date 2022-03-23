import { useEffect, useState } from "react";
import { Categoria } from "./Categoria";
import { FraseDeCategoria } from "./FraseDeCategoria";
import styles from "./MostradoCategorias.module.css";

export function MostradoCategorias() {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories
  //https://api.chucknorris.io/jokes/random?category=animal

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((result) => result.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  return (
    <ul className={styles.listaCategorias}>
      {categorias.map((categoria) => (
        
        <Categoria key={categoria.id} categoria = {categoria} />
      ))}
      <FraseDeCategoria categoria={categorias[0]} />
    </ul>
    
  );

}
