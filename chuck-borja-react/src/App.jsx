import { MostradoCategorias } from "./MostradoCategorias";
import styles from "./App.module.css";
import { ListaSeleccionada } from "./ListaSeleccionada";
import { FraseDeCategoria } from "./FraseDeCategoria";

export function App(){
    return(<div>
            <header>
                <h1>Proyecto JS - Chuck Borja Díaz</h1>
            </header>
            <main>
                <MostradoCategorias />

                <div className={styles.container}>
                    <div>
                        <h3>Lista de frases seleccionadas</h3>
                        <ListaSeleccionada />
                    </div>

                    <div>
                        <h3>Frase de la categoría</h3>
                        <FraseDeCategoria />
                    </div>
                </div>
            </main>
    </div>);
}