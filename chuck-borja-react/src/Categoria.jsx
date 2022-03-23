import styles from "./Categoria.module.css";

export function Categoria({ categoria }) {
  return <p value={categoria} className={styles.categoriaEspecifica}>{categoria}</p>;
}
