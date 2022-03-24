import { MostradoCategorias } from "./MostradoCategorias";
import styles from "./App.module.css";
import { ListaSeleccionada } from "./ListaSeleccionada";
import { FraseDeCategoria } from "./FraseDeCategoria";

export function App(){
    return(<div>
            <header>
                <div className={styles.containerTitulo}>
                    <h1>Generador de Frases Chuck Norris - ReactJS</h1>
                    <h4>Creado por Borja Díaz</h4>
                    <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" height="150px" alt="" />
                </div>
                <MostradoCategorias />
            </header>
            <main>
            </main>
    </div>);
}