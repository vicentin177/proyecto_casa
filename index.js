function operadormetodo() {
    let arreglo = [12, 43, 35, 64, 32, 89, 72, 99, 10];
    let arreglo_inicial = [12, 43, 35, 64, 32, 89, 72, 99, 10];
    let eliminados = [];
    let insertados = [];
    let arreglo_sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 21];
    let suma = 0;

    // Eliminación de elementos del arreglo original
    for (let i = 0; i < arreglo_inicial.length; i++) {
        eliminados.push(arreglo.pop());
    }

    // Números insertados al principio del arreglo
    insertados.unshift(12);
    insertados.unshift(21);
    insertados.unshift(32);
    insertados.unshift(23);
    insertados.unshift(21);
    insertados.unshift(32);
    insertados.unshift(98);
    insertados.unshift(41);

    // Suma de valores en el arreglo_sum
    for (let i = 0; i < arreglo_sum.length; i++) {
        suma += arreglo_sum[i];
    }

    alert(`Los números son: ${arreglo_inicial}\nLos eliminados son: ${eliminados}\nLos números insertados son: ${insertados}\nLos números sumados son: ${arreglo_sum}\nLa suma de los números es: ${suma}`);
}

operadormetodo();


// modificacion de mensaje ejerciio 2


 function modificacion(){


        // Definir los mensajes inicial y modificado
        const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
        const mensajeModificado = mensajeInicial.slice(); // Crear una copia del mensaje inicial
    
        // Modificar el mensaje modificado utilizando splice
        mensajeModificado.splice(0, 2, "Somos", "nosotros");
        mensajeModificado.splice(7, 3, "los", "mejores");
      
    
        // Mostrar los mensajes en alertas
        alert("Mensaje Inicial:\n" + mensajeInicial.join(" "));
        alert("Mensaje Modificado:\n" + mensajeModificado.join(" "));
    }
    
    // Llamar a la función para mostrar los mensajes
    mostrarMensajes();  
    