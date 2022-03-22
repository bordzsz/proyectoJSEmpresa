import styles from "./Categoria.module.css";

export function Categoria({ categoria }) {
  return <li className={styles.categoriaEspecifica}>{categoria}</li>;
}
