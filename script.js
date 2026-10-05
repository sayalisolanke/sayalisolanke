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
/* =====================================================
   SKILLS SECTION
===================================================== */

#skills {
    padding-top: 20px;
    padding-bottom: 70px;
}

#skills h2 {
    margin-bottom: 28px;
}


/* =====================================================
   SKILLS TABS
===================================================== */

.skills-tabs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
}

.skills-tab {
    appearance: none;

    padding: 11px 18px;
    min-height: 49px;

    border: 2px solid #eadfd5;
    border-radius: 15px;

    background: #fffdf9;
    color: #1d2a3a;

    font-family: inherit;
    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}


/* Hover */

.skills-tab:hover {
    border-color: #1d2a3a;
    transform: translateY(-1px);
}


/* Active tab */

.skills-tab.active {
    background: #4fc7c2;
    border-color: #1d2a3a;
    color: #111;

    box-shadow: 5px 5px 0 #1d2a3a;
}


/* =====================================================
   SKILLS CARD
===================================================== */

.skills-card {
    width: 100%;
    min-height: 175px;

    box-sizing: border-box;

    padding: 42px 36px;

    background: rgba(255, 255, 255, 0.78);

    border: 1px solid rgba(255, 255, 255, 0.9);

    border-radius: 25px;

    box-shadow:
        7px 7px 0 rgba(224, 203, 194, 0.7);
}


/* =====================================================
   INDIVIDUAL SKILL CONTENT
===================================================== */

.skill-content {
    display: none;
}

.skill-content.active {
    display: block;

    animation: skillFade 0.25s ease;
}


/* Heading inside card */

.skill-content h3 {
    margin: 0 0 22px;

    font-family: "Playfair Display", serif;

    font-size: 25px;

    color: #1d2a3a;
}


/* Description */

.skill-content p {
    margin: 0;

    color: #29374a;

    font-size: 18px;
    line-height: 1.7;
}


/* =====================================================
   ANIMATION
===================================================== */

@keyframes skillFade {

    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

    #skills {
        padding-bottom: 45px;
    }

    .skills-tabs {
        gap: 8px;
    }

    .skills-tab {
        padding: 9px 13px;
        min-height: 44px;
        font-size: 14px;
    }

    .skills-card {
        padding: 28px 20px;
        min-height: 150px;
        border-radius: 20px;
    }

    .skill-content h3 {
        font-size: 21px;
    }

    .skill-content p {
        font-size: 16px;
    }

}
