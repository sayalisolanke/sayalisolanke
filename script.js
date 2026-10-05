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
// =====================================================
// SKILLS TABS
// =====================================================

function showSkill(skillId, button) {

    // Hide all skill content
    document.querySelectorAll(".skill-content").forEach(function (content) {

        content.classList.remove("active");

    });


    // Remove active state from all tabs
    document.querySelectorAll(".skills-tab").forEach(function (tab) {

        tab.classList.remove("active");

    });


    // Show selected skill
    var selectedSkill = document.getElementById(skillId);

    if (selectedSkill) {

        selectedSkill.classList.add("active");

    }


    // Activate clicked tab
    if (button) {

        button.classList.add("active");

    }

}
