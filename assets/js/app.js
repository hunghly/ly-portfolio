{
    $(document).ready(() => {
        const aboutMeEl = $("#about-me-message")[0];
        console.log(aboutMeEl.innerHTML);
        const aboutMeMessages = ['am a USAF vet', 'am a software developer', 'love to learn', 'am also passionate about code', 'solve problems'];

        const displayAboutMe = () => {
            let i = 0;
            let intervalID = setInterval(() => {
                $(aboutMeEl).addClass('rollIn').removeClass('rollOut').html(aboutMeMessages[i]);
                i++;
                if (i === aboutMeMessages.length) clearInterval(intervalID);
                else {
                    setTimeout(() => {
                        $(aboutMeEl).addClass('rollOut').removeClass('rollIn')
                    }, 3000);
                }
            }, 3500)
        };



        displayAboutMe();
    });
}