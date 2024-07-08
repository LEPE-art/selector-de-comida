// Arreglo con las comidas disponibles
const comidas = [
    "Pipian", "Carne en chilito", "Carne en su jugo", "Pollo enchilado", "Tacos de molida",
    "Plicadillo de molida", "Picadillo de carne desherbada", "Tacos dorados", "Sopes",
    "Chilaquiles", "Enchiladas verdes", "Enchiladas rojas", "Pollo emplumado", "Arroz blanco",
    "Arroz rojo", "Camarones empanizados", "Birria", "Filete empanizado", "Pozole",
    "Huevo en chilito", "Huevo con chorizo", "Albondigas", "Papas a la mexicana", "Comida china",
    "Espagueti verde", "Caldo de res", "Coliflor capeado", "Tortas de papas", "Huevos con jamon",
    "Quesadillas de masa", "Quesadillas de arina", "Lonches de pierna", "Lonches de jamon",
    "Sanduwiches", "Carne a la mexicana", "Carne azada", "Pollo a la mexicana", "Caldo michi",
    "Ensalada de atún", "Ensalasa de pollo", "tostadas sensillas", "tacos de solla",
    "Chiles rellenos", "Rajas con queso", "frijoles conjelados", "Huevos al gusto",
    "Coptel de camaron con pulpo", "Sopa de frijoles", "Sopa de fideo y pollo",
    "Frijoles con bisteck", "Lentejas", "Mole dulce", "Croquetas de atun", "Albondigas en chipote",
    "Nopales con carne", "Nopales con huevo", "Aguachile Verde", "Tacos de barbacoa",
    "Tortitas de camaron con nopales", "Quesadillas con flor de calabaza", "Pollo empanizado",
    "Pollo a la plancha con sopa de arroz", "Hot dogs y papas a la fransesa", "Hamburgesas",
    "Chiles rellenos con queso"
];

// Función para elegir una comida aleatoria
function elegirComida() {
    const indice = Math.floor(Math.random() * comidas.length);
    const comidaElegida = comidas[indice];
    document.getElementById('comida-seleccionada').textContent = `¡Hoy comerás: ${comidaElegida}!`;
}
