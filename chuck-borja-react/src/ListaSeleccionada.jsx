import styles from "./ListaSeleccionada.module.css";

export function ListaSeleccionada({ frase }) {
  

  return (
    <ul id="listaFrases" className={styles.listaSeleccion}>
        {frase.map((unaFrase) => (
          
        <li> {unaFrase} </li>

        ))}
    </ul>
  );
}
