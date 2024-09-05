$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const fileUrl = "assets/Sanjib's CV.pdf";


    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = "Sanjib's CV";
    a.click();
});