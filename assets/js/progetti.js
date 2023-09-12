/* redirect + preloader */

var loader = document.getElementById('logo-intero');
var loadercont = document.getElementById('loader-cont');
var slideup = document.getElementById('s-up');
var slidedown = document.getElementById('s-down');


function detectLanguageAndRedirect() {
  // Show the loader before making the AJAX request.
  $(loader).removeClass("complete-animation").removeClass("complete");

  $.get("https://ipinfo.io?token=382b4794128a39", function(response) {
    // La risposta contiene i dati sull'IP, inclusa la nazione.
    var country = response.country;

    // Get the current language from the URL
    var currentLanguage = window.location.pathname.split("/")[1]; // Assumes the language code is the first part of the path (e.g., "en" in "https://example.com/en/index.html")

    var pageName = currentLanguage.split("/").pop();

    // Check if the user is already on the correct language version
    if (country === "IT" && (currentLanguage === "it" || currentLanguage === "" || currentLanguage === pageName)) {
      // User is already on the Italian version, no need to redirect
      handleCompleteAnimation();
    } else if (country === "JP" && currentLanguage === "ja") {
      // User is already on the Japanese version, no need to redirect
      handleCompleteAnimation();
    } else if (country !== "IT" && country !== "JP" && currentLanguage === "en") {
      // User is on the English version, no need to redirect
      handleCompleteAnimation();
    } else {
      // Redirect to the appropriate version based on the country
      if (country === "IT") {
        // Reindirizza alla pagina principale italiana.
        window.location.href = "https://achrisgraphics.netlify.app/" + pageName;
      } else if (country === "JP") {
        // Reindirizza alla versione giapponese del sito.
        window.location.href = "https://achrisgraphics.netlify.app/ja/" + pageName;
      } else {
        // Reindirizza alla versione inglese del sito per tutti gli altri paesi.
        window.location.href = "https://achrisgraphics.netlify.app/en/" + pageName;
      }
    }
  });
}

function handleCompleteAnimation() {
  // Handle the loader animations after the response is received and redirection is done.
  setTimeout(function() {
    $(loader).addClass("complete-animation");
  }, 500);
  setTimeout(function() {
    $(loader).addClass("complete");
  }, 1000);
  setTimeout(function() {
    $(slideup).addClass("complete-up-animation");
  }, 1000);
  setTimeout(function() {
    $(slidedown).addClass("complete-down-animation");
  }, 1000);
  setTimeout(function() {
    $(slideup).addClass("complete");
  }, 2000);
  setTimeout(function() {
    $(slidedown).addClass("complete");
  }, 2000);
  setTimeout(function() {
    $(loadercont).addClass("complete");
  }, 2000);
}

// Call the detectLanguageAndRedirect function when the page is ready.
$(document).ready(function() {
  detectLanguageAndRedirect();
});

/* navbar */

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
