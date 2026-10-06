// =====================================================
// RESEARCH TABS
// =====================================================

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
    document.querySelectorAll(".skill-content").forEach(function(content) {
        content.classList.remove("active");
    });

    // Remove active state from all tabs
    document.querySelectorAll(".skills-tab").forEach(function(tab) {
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


// =====================================================
// NAVIGATION
// =====================================================

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll(
    "#top, #about, #education, #research, #skills, #contact"
);


// Close mobile menu when a navigation link is clicked

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.body.classList.remove("menu-open");

    });

});


// =====================================================
// ACTIVE NAVIGATION SECTION
// =====================================================

const navObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                const sectionId = entry.target.id;

                navLinks.forEach(function(link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach(function(section) {
    navObserver.observe(section);
});
