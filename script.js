function showResearch(projectId, button) {

    const projects = document.querySelectorAll(".research-project");

    projects.forEach(function(project) {
        project.classList.remove("active-project");
    });

    const buttons = document.querySelectorAll(".research-tab");

    buttons.forEach(function(tab) {
        tab.classList.remove("active");
    });

    const selectedProject = document.getElementById(projectId);

    if (selectedProject) {
        selectedProject.classList.add("active-project");
    }

    if (button) {
        button.classList.add("active");
    }
}
