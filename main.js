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

        function contactSubmission(){
            $(document).on('click', 'input#submit', function (event) {
                event.preventDefault();
                console.log('Contact received');
                $('#ContactForm').attr('action',
                'mailto:t73designs@yahoo.com?subject=Portfolio Message' +
                $('#firstName').val() + '&body=' + $('#lastName').val() + '&body=' + $('#company').val() + '&body=' + $('#message').val() + '&body=');
 $('#ContactForm').submit();
            })
            };
    


    $(projectsReveal);
    $(experienceReveal);
    $(contactSubmission);