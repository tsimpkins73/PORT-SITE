function projectsReveal(){
    $(document).on('click', 'button#ProjectsButton', function (event) {
        event.preventDefault();
        console.log('Reveal Projects');
        $("button#ProjectsButton").css("display", "none");
        $("section#Projects").css("display", "block");
    })
    };

    function experienceReveal(){
        $(document).on('click', 'button#WorkExperienceButton', function (event) {
            event.preventDefault();
            console.log('Reveal Work Experience');
            $("button#WorkExperienceButton").css("display", "none");
            $("section#WorkExperience").css("display", "block");
        })
        };


    $(projectsReveal);
    $(experienceReveal);