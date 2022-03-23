import styles from "./ListaSeleccionada.module.css";

export function ListaSeleccionada({ frase }) {
  
  return (
    <ul className={styles.listaSeleccion}>
        <li>{ frase }</li>
    </ul>
  );
}
