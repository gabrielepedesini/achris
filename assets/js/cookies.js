/* cookies */

// Function to set a cookie with a given name, value, and expiration time
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

// Function to set a session cookie with a given name and value
function setSessionCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

// Function to get the value of a cookie with a given name
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    
    return null;
}

// Check if the user has previously accepted the cookie or declined it for the session
const cookieAccepted = getCookie("cookie-consent");
const sessionDeclined = getCookie("cookie-decline");

if (cookieAccepted === "true") {
    // User has accepted the cookie, hide the banner
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
        cookieBanner.style.display = "none";
    }
} else if (sessionDeclined === "true") {
    // User has declined the cookie for the session, hide the banner for the session
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
        cookieBanner.style.display = "none";
    }
}

// Event listener for the "Accept" button
const acceptButton = document.getElementById("accept-cookie");
if (acceptButton) {
    acceptButton.addEventListener("click", function () {
        // Set a cookie to remember user's choice for 90 days
        setCookie("cookie-consent", "true", 90);
        setCookie("analytics-consent", "true", 90);
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
    });
}

// Event listener for the "Config" button
const configButton = document.getElementById("config-cookie");
if (configButton) {
    configButton.addEventListener("click", function () {

        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }

        const cookieModal = document.getElementById("cookie-modal");
        if (cookieModal) {
            cookieModal.style.display = "flex";
        }

    });
}

const cookieModal = document.getElementById("cookie-modal");
const boxModal = document.getElementById("cookie-modal-box");
const closeButton = document.getElementById("close-cookie");

// Function to close the modal
function closeModal() {
    cookieModal.style.display = "none";

    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
        cookieBanner.style.display = "block";
    }
}

closeButton.addEventListener("click", closeModal);

// Event listener to close the modal when clicking outside the modal
cookieModal.addEventListener('click', function (event) {
    // Check if the click is outside the image container
    if (!boxModal.contains(event.target)) {
        cookieModal.style.display = "none";

        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "block";
        }
    }
});

const checkbox1 = document.querySelector(".checkbox1");
const checkbox2 = document.querySelector(".checkbox2");

// Disable checkbox2 if checkbox1 is unchecked
checkbox1.addEventListener("change", function () {
    checkbox2.disabled = !checkbox1.checked;
    if (!checkbox1.checked) {
        checkbox2.checked = false;
    }
});



const showDesc1 = document.getElementById("show-desc-1");
const showDesc2 = document.getElementById("show-desc-2");

const desc1 = document.getElementById("desc-1");
const desc2 = document.getElementById("desc-2");

const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");

let isOpen1 = false;
let isOpen2 = false;

showDesc1.addEventListener("click", function() {
  if (isOpen1) {
    // Close the description
    desc1.classList.remove("height");
    arrow1.classList.remove("rotate");
  } else {
    // Open the description with a 0.3s transition
    desc1.classList.add("height");
    arrow1.classList.add("rotate");
  }
  
  // Toggle the state
  isOpen1 = !isOpen1;
});

showDesc2.addEventListener("click", function() {
  if (isOpen2) {
    // Close the description
    desc2.classList.remove("height");
    arrow2.classList.remove("rotate");
  } else {
    // Open the description with a 0.3s transition
    desc2.classList.add("height");
    arrow2.classList.add("rotate");
  }
  
  // Toggle the state
  isOpen2 = !isOpen2;
});


// Event listener for the "Save" button
const saveButton = document.getElementById("save-cookie");

saveButton.addEventListener("click", function() {
    const isChecked1 = checkbox1.checked;
    const isChecked2 = checkbox2.checked;

    if (isChecked1 && !isChecked2) {
        setCookie("cookie-consent", "true", 90);
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
        cookieModal.style.display = "none";

    } else if (isChecked1 && isChecked2) {
        setCookie("cookie-consent", "true", 90);
        setCookie("analytics-consent", "true", 90);
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
        cookieModal.style.display = "none";

    } else if (!isChecked1 && !isChecked2) {
        setSessionCookie("cookie-decline", "true");
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
        cookieModal.style.display = "none";
    }
  });