import { useEffect, useState } from "react";
import { Categoria } from "./Categoria";

export function MostradoCategorias() {
  //https://api.chucknorris.io/jokes/random
  //https://api.chucknorris.io/jokes/categories

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((result) => result.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  return (
    <ul>
      {categorias.map((categoria) => (
        <Categoria key={categoria.id} categoria = {categoria} />
      ))}
    </ul>
  );
}
