import { MostradoCategorias } from "./MostradoCategorias";
import styles from "./App.module.css";
import { ListaSeleccionada } from "./ListaSeleccionada";
import { FraseDeCategoria } from "./FraseDeCategoria";

export function App(){
    return(<div>
            <header>
                <div className={styles.containerTitulo}>
                    <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" />
                    <h1>Proyecto JS - Chuck Borja Díaz</h1>
                </div>
                <MostradoCategorias />
            </header>
            <main>
                <div className={styles.container}>
                    <div id="frasesSeleccionadas">
                        <h3>Lista de frases seleccionadas</h3>
                        <ListaSeleccionada />
                    </div>

                    <div id="prueba">
                        <h3>Frase de la categoría</h3>
                        <FraseDeCategoria />
                        
                    </div>
                </div>
            </main>
            <script src="./script.js"></script>
    </div>);
}