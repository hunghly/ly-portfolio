{
    $(document).ready(() => {
        const aboutMeEl = $("#about-me-message")[0];
        const aboutMeMessages = ['am a USAF veteran', 'am a Software Developer', 'love to learn', 'am also passionate about coding', 'solve problems'];
        const project2HeadingMarkup = `
                <div class="col-sm-6 col-xs-12">
                    <p><span>Hangman</span><br>
                        learned HTML canvas, game logic, dynamic HTML generation to create a simple Hangman app.
                    </p>
                    <a href="https://github.com/hunghly/sample-portfolio-code/tree/master/hangman" target="_blank">code photos</a>
                </div>`;
        const project2VideoMarkup = `
                <div class="col-sm-6 col-xs-12">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/9TRkm07gctU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>`;
        let previousView = (window.outerWidth >= 576) ? 'default' : 'x-small';
        let currentView = (window.outerWidth >= 576) ? 'default' : 'x-small';

        const displayAboutMe = () => {
            let i = 0;
            let intervalID = setInterval(() => {
                $(aboutMeEl).addClass('rollIn').removeClass('rollOut').html(aboutMeMessages[i]);
                i++;
                if (i === aboutMeMessages.length) clearInterval(intervalID);
                else {
                    setTimeout(() => {
                        $(aboutMeEl).addClass('rollOut').removeClass('rollIn')
                    }, 2500);
                }
            }, 3000)
        };

        const xSmallView = () => {
            $("#project-2").html(`${project2HeadingMarkup}${project2VideoMarkup}`);
        };

        const defaultView = () => {
            $("#project-2").html(`${project2VideoMarkup}${project2HeadingMarkup}`);
        };

        const setEvenProjectHTML = (view) => {
            if (view === 'default') defaultView();
            else xSmallView();
        };

        const setCurrentView = () => {
            currentView = (window.outerWidth >= 576) ? 'default' : 'x-small';
        };

        const setEvenProjects = () => {
            setCurrentView();
            if (currentView !== previousView) {
                setEvenProjectHTML(currentView);
                previousView = currentView;
            }
        };

        /*------Event listeners-------*/
        window.addEventListener("resize", function (e) {
            setEvenProjects();
        });
        setEvenProjects();
        setEvenProjectHTML(currentView);
        displayAboutMe();
    });
}