function mostrarTareas(tareas) {
    console.log("Lista de tareas");

tareas.forEach((tarea) => {
    console.log("- " + tarea);
    });
}

const tareas = ["Estudiar Git", "Hacer commits", "Aprender ramas"];
mostrarTareas(tareas);