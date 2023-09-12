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

    // Check if the user is already on the correct language version
    if (country === "IT" && (currentLanguage === "it" || currentLanguage === "" || currentLanguage === "index.html")) {
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
        window.location.href = "";
      } else if (country === "JP") {
        // Reindirizza alla versione giapponese del sito.
        window.location.href = "https://achrisgraphics.netlify.app/ja/";
      } else {
        // Reindirizza alla versione inglese del sito per tutti gli altri paesi.
        window.location.href = "https://achrisgraphics.netlify.app/en/";
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


/* download */

var downOpen = document.getElementById('download-open');
var downClose = document.getElementById('download-close');
var modal = document.getElementById('modal');

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

downOpen.addEventListener("click", openModal);
downClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

/* checkbox */

var masterCheckbox = document.querySelector(".download-checkbox");
var downloadButtons = document.querySelectorAll(".down-button");

// Add event listener to the master checkbox
masterCheckbox.addEventListener("change", function () {
  var isChecked = masterCheckbox.checked;

  // Update the download state of all buttons
  downloadButtons.forEach(function (button) {
    if (isChecked) {
      button.classList.remove("disabled");
    } else {
      button.classList.add("disabled");
    }
  });
});

// Add event listener to each button to prevent navigation if disabled
downloadButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (button.classList.contains("disabled")) {
      e.preventDefault(); // Prevent navigation if the button is disabled
    }
  });
});

/* flag cookie */

// Function to check if the "cookie-consent" cookie is set to true
function hasCookieConsent() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'cookie-consent' && value === 'true') {
      return true;
    }
  }
  return false;
}

// Function to set the "flag-cookie" when the checkbox is flagged
function setFlagCookie() {
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  document.cookie = 'flag-cookie=true; expires=' + thirtyDaysFromNow.toUTCString() + '; path=/';
}

// Function to hide the checkbox container
function hideCheckboxContainer() {
  const checkboxContainer = document.getElementById('checkbox-container');
  if (checkboxContainer) {
    checkboxContainer.style.display = 'none';
    downloadButtons.forEach(function (button) {
      button.classList.remove("disabled");
    })
  }
}

// Check if the user has previously accepted cookies
if (hasCookieConsent()) {
  // Hide the checkbox container if "flag-cookie" is true
  if (document.cookie.includes('flag-cookie=true')) {
    hideCheckboxContainer();
  }  
}

if (masterCheckbox) {
  masterCheckbox.addEventListener('change', function () {
    if (this.checked) {
      if (hasCookieConsent()) {
        setFlagCookie();
        console.log('Checkbox is checked'); 
      }
    }
  });
}

/* skills */

var offsetTop = $('#skill-alarm').offset().top;
$(window).scroll(function() {
var height = $(window).height();
if($(window).scrollTop()+height > offsetTop) {
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      }, 1200);
    });
  }
});

/* counters */

var number = 0;

function animateCounter() {
  if (number !== 1) {
    $(".num").counterUp({
      delay: 10,
      time: 800,
    });

    number = 1;
  }
}

// Call animateCounter every 1000 milliseconds (1 second)
setInterval(animateCounter, 1000);


/* data */

window.onload = function() {
  // La data di nascita (17 giugno) nel formato mm/gg/aaaa
  const birthday = "06/17/2003";

  // Funzione per calcolare l'età in base alla data di nascita
  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateFormatted = new Date(birthDate.replace("YYYY", today.getFullYear()));
    
    let age = today.getFullYear() - birthDateFormatted.getFullYear();
    const isBirthdayPassed = today.getMonth() > birthDateFormatted.getMonth() ||
                            (today.getMonth() === birthDateFormatted.getMonth() && today.getDate() >= birthDateFormatted.getDate());
    
    if (!isBirthdayPassed) {
      age -= 1;
    }
    
    return age;
  }

  // Funzione per aggiornare l'età nell'HTML
  function updateAge() {
    const ageElement = document.getElementById("age");
    const age = calculateAge(birthday);
    ageElement.textContent =  age; 
  }

  // Aggiornamento iniziale dell'età
  updateAge();

  // Aggiornamento dell'età ogni giorno a mezzanotte
  setInterval(updateAge, 24 * 60 * 60 * 1000);
};
