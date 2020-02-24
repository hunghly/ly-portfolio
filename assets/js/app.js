{
    $(document).ready(() => {
        const aboutMeEl = $("#about-me-message")[0];
        console.log(aboutMeEl.innerHTML);
        const aboutMeMessages = ['am a USAF veteran', 'am a Software Developer', 'love to learn', 'am also passionate about coding', 'solve problems'];

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



        displayAboutMe();
    });
}