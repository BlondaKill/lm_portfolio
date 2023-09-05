// Array de proyectos (puedes agregar más proyectos)
const projects = [
    {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1.",
        link: "https://github.com/tunombre/proyecto1"
    },
    {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2.",
        link: "https://github.com/tunombre/proyecto2"
    }
];

// Función para mostrar proyectos en la página
function displayProjects() {
    const projectsDiv = document.getElementById("projects");
    
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver en GitHub</a>
        `;
        
        projectsDiv.appendChild(projectDiv);
    });
}

// Llama a la función para mostrar proyectos cuando la página se carga
window.addEventListener("load", displayProjects); 
