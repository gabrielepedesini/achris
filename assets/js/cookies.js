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
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
    });
}

// Event listener for the "Decline" button
const declineButton = document.getElementById("decline-cookie");
if (declineButton) {
    declineButton.addEventListener("click", function () {
        // User declined the cookie for the session, set the session cookie accordingly
        setSessionCookie("cookie-decline", "true");
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
    });
}
