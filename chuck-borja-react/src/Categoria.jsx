import styles from "./Categoria.module.css";

export function Categoria({ categoria }) {
  return <li value={categoria} className={styles.categoriaEspecifica}>{categoria}</li>;
}
