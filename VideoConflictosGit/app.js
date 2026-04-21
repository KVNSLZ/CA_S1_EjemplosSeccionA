function mostrarTareas(tareas) {
    console.log("Lista de tareas");

tareas.forEach((tarea) => {
    console.log("- " + tarea);
    });
}

// esto es un comentario: 
const tareas = ["Estudiar Git", "Hacer commits", "Aprender ramas"];
mostrarTareas(tareas);