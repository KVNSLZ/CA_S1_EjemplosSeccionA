function mostrarTareas(tareas) {
  console.log("=== LISTA DE TAREAS PENDIENTES ===");

  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea}`);
  });
}

const tareas = ["Estudiar Git", "Hacer commits", "Aprender ramas"];
mostrarTareas(tareas);