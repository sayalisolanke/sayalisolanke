// =====================================================
// NAVIGATION
// =====================================================

document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
    });
});


// =====================================================
// RESEARCH PROJECT ACCORDION
// =====================================================

document.querySelectorAll('.project-head').forEach(function (head) {

    head.addEventListener('click', function () {

        var project = head.closest('.project');

        if (!project) return;

        var isOpen = project.classList.toggle('open');

        head.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

    });

});


// =====================================================
// CONTACT SECTION
// Makes "See my research" become "Download CV"
// and uses the CV link that already exists in your website.
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

    // -------------------------------------------------
    // FIND YOUR EXISTING CV LINK
    // -------------------------------------------------

    var cvLink = null;

    document.querySelectorAll('a').forEach(function (link) {

        var text = link.textContent.trim().toLowerCase();

        if (
            text === 'cv' ||
            text === 'curriculum vitae' ||
            text.includes('download cv')
        ) {
            cvLink = link.getAttribute('href');
        }

    });


    // -------------------------------------------------
    // FIND "SEE MY RESEARCH"
    // -------------------------------------------------

    var researchButton = null;

    document.querySelectorAll('a, button').forEach(function (element) {

        var text = element.textContent.trim().toLowerCase();

        if (text === 'see my research') {
            researchButton = element;
        }

    });


    // -------------------------------------------------
    // CHANGE IT TO DOWNLOAD CV
    // -------------------------------------------------

    if (researchButton) {

        researchButton.textContent = '↓ Download CV (PDF)';

        researchButton.classList.add('download-cv-button');

        if (cvLink) {
            researchButton.setAttribute('href', cvLink);
        }

    }


    // -------------------------------------------------
    // ADD CONTACT INFORMATION BOXES
    // -------------------------------------------------

    var contactSection = document.querySelector('.contact-section');

    if (!contactSection) {

        // Find the section containing the buttons
        if (researchButton) {
            contactSection = researchButton.closest('section');
        }

    }


    if (contactSection) {

        // Don't create the boxes twice
        if (!contactSection.querySelector('.contact-info')) {

            var contactInfo = document.createElement('div');

            contactInfo.className = 'contact-info';

            contactInfo.innerHTML = `
                
                <div class="info-box">
                    <div class="info-label">BASED</div>
                    <div class="info-value">Kerala, India</div>
                </div>

                <div class="info-box">
                    <div class="info-label">EMAIL</div>
                    <div class="info-value">
                        YOUR-EMAIL-HERE
                    </div>
                </div>

                <div class="info-box">
                    <div class="info-label">PHONE</div>
                    <div class="info-value">
                        +91 XXXXX XXXXX
                    </div>
                </div>

            `;

            contactSection.appendChild(contactInfo);

        }

    }

});
