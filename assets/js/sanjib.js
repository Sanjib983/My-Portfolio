// Loading Start

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progress-bar');
    const mainContent = document.getElementById('main-content');

    // Simulate progress by setting the width of the progress bar
    let progress = 0;
    const interval = setInterval(function() {
        progress += 2;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100); // Update every 100 milliseconds

    // Function to hide loader and show main content with fade-in effect
    function hideLoader() {
        loader.style.opacity = '0'; // Fade out loader
        setTimeout(function() {
            loader.style.display = 'none'; // Hide loader after fade out
            mainContent.style.display = 'block'; // Show main content
            mainContent.classList.add('fade-in'); // Add fade-in class to show main content
        }, 1000); // Match transition duration in CSS
    }

    // Hide loader and show main content after 5 seconds or when progress reaches 100%
    setTimeout(function() {
        if (progress >= 100) {
            hideLoader();
        } else {
            hideLoader();
        }
    }, 5000); // 5000 milliseconds = 5 seconds

    // Ensure main content shows if load completes before 5 seconds
    window.addEventListener('load', function() {
        if (progress >= 100) {
            hideLoader();
        }
    });
});

// Loading End

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

// POPUP SCRIPT

document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Optional: Close popup if clicked outside of the popup-content
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
