import 'core-js/es/map';
import 'core-js/es/set';

import { ReactDOM } from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,Array.from(document.getElementsByTagName("header")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")).forEach(element => {
        element.addEventListener("click", function clickCategoria(event){
            var frasesLista = document.getElementById("frasesSeleccionadas").lastChild;
            var li = document.createElement("li");
            console.log("funciona");
            //hacer llamada al fetch para traer una nueva frase.
        })
    })
);