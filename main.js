function projectsReveal() {
    $(document).on('click', 'button#ProjectsButton', function (event) {
        event.preventDefault();
        console.log('Reveal Projects');
        $("button#ProjectsButton").css("display", "none");
        $("section#Projects").css("display", "block");
    })
};

function projectsCollapse() {
    $(document).on('click', 'button#ProjectsCollapseButton', function (event) {
        event.preventDefault();
        console.log('Collapse Projects');
        $("button#ProjectsButton").css("display", "block");
        $("section#Projects").css("display", "none");
    })
};

function experienceReveal() {
    $(document).on('click', 'button#WorkExperienceButton', function (event) {
        event.preventDefault();
        console.log('Reveal Work Experience');
        $("button#WorkExperienceButton").css("display", "none");
        $("section#WorkExperience").css("display", "block");
    })
};

function experienceCollapse() {
    $(document).on('click', 'button#WorkExperienceCollapseButton', function (event) {
        event.preventDefault();
        console.log('Collapse Work Experience');
        if ($(window).width() < 700) {
            $("button#WorkExperienceButton").css("display", "block");
            $("section#WorkExperience").css("display", "none");
        };
    })
};

$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() > 700) {
            $("button#ProjectsButton").css("display", "none");
            $("section#Projects").css("display", "block");
            $("button#ProjectsCollapseButton").css("display", "none");
            $("button#WorkExperienceButton").css("display", "none");
            $("section#WorkExperience").css("display", "block");
            $("button#WorkExperienceCollapseButton").css("display", "none");
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() < 700) {
            $("button#ProjectsButton").css("display", "block");
            $("section#Projects").css("display", "none");
            $("button#ProjectsCollapseButton").css("display", "block");
            $("button#WorkExperienceButton").css("display", "block");
            $("section#WorkExperience").css("display", "none");
            $("button#WorkExperienceCollapseButton").css("display", "block");
        }
    });
});



$(projectsReveal);
$(experienceReveal);
$(projectsCollapse);
$(experienceCollapse);
$(mobileOverrides);
