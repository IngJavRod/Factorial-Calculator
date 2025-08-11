// Esta es la función que calcula el factorial de un número
function calcularFactorial(n) {
    // Si el número es 0 o 1, su factorial es 1 (por definición)
    if (n === 0 || n === 1) {
        return 1; // El factorial de 0 y 1 es 1
    }
    
    // Si el número es mayor que 1, calculamos su factorial
    let resultado = 1; // Empezamos con 1 porque multiplicar por 1 no cambia el valor.
    
    // Usamos un ciclo para multiplicar todos los números desde 2 hasta n
    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplicamos el resultado por el número actual (i)
    }
    
    return resultado; // Devolvemos el resultado final
}

// Esta es la función que le pide al usuario que ingrese un número
function obtenerNumero() {
    let numero; // Variable para guardar el número ingresado por el usuario
    
    // Creamos un ciclo para que el programa siga pidiendo números hasta que el usuario decida salir
    do {
        // Pedimos al usuario que ingrese un número
        numero = prompt("Por favor, ingresa un número para calcular su factorial:");

        // Si el usuario presiona "Cancelar" o deja el campo vacío, salimos del ciclo
        if (numero === null || numero === "") {
            alert("Gracias por usar el programa. ¡Hasta luego!"); // Mensaje de despedida
            break; // Salimos del ciclo
        }

        // Convertimos el valor ingresado de string a número
        numero = Number(numero);

        // Verificamos si lo que ingresó es un número válido y es mayor o igual a 0
        if (isNaN(numero) || numero < 0) {
            // Si no es un número válido o es negativo, mostramos un mensaje de error
            alert("¡Error! Debes ingresar un número válido y mayor o igual a 0.");
        } else {
            // Si el número es válido, calculamos su factorial
            let factorial = calcularFactorial(numero);
            // Mostramos el resultado en una ventana emergente (alert)
            alert(`El factorial de ${numero} es: ${factorial}`);
        }
    } while (true); // El ciclo sigue repitiéndose hasta que el usuario decida salir
}

// Llamamos a la función para iniciar el programa
obtenerNumero();
