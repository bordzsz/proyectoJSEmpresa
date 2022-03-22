import { MostradoCategorias } from "./MostradoCategorias";
import styles from "./App.module.css";
import { ListaSeleccionada } from "./ListaSeleccionada";

export function App(){
    return(<div>
            <header>
                <h1>Proyecto JS - Chuck Borja Díaz</h1>
            </header>
            <main>
                <MostradoCategorias />
                <h3>Lista de frases seleccionada:</h3>
                <ListaSeleccionada />
            </main>
    </div>);
}