{
    $(document).ready(() => {
        const aboutMeEl = $("#about-me-message")[0];
        const aboutMeMessages = ['am a USAF veteran', 'am Software Developer', 'also love to learn', 'have a passion for code', 'solve problems'];
        const project2HeadingMarkup = $("#project-2-heading")[0].outerHTML;
        const project2CarouselMarkup = $("#project-2-carousel-container")[0].outerHTML;
        const project2ModalMarkup = $("#project-2-modal")[0].outerHTML;
        const project4HeadingMarkup = $("#project-4-heading")[0].outerHTML;
        const project4CarouselMarkup = $("#project-4-carousel-container")[0].outerHTML;
        const project4ModalMarkup = $("#project-4-modal")[0].outerHTML;
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
            $("#project-2").html(`${project2HeadingMarkup}${project2CarouselMarkup}${project2ModalMarkup}`);
            $("#project-4").html(`${project4HeadingMarkup}${project4CarouselMarkup}${project4ModalMarkup}`);
        };

        const defaultView = () => {
            $("#project-2").html(`${project2CarouselMarkup}${project2HeadingMarkup}${project2ModalMarkup}`);
            $("#project-4").html(`${project4CarouselMarkup}${project4HeadingMarkup}${project4ModalMarkup}`);
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