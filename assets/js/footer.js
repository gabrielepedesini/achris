// footer

// Function to create and insert the footer content
function setFooterContent() {
    const footer = document.getElementById('footer');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container', 'footer-container');

    const copyrightDiv = document.createElement('div');
    copyrightDiv.classList.add('copyright');
    copyrightDiv.innerHTML = `© ${copyrightHolder} - <span class="anno"></span>`;
    containerDiv.appendChild(copyrightDiv);

    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    containerDiv.appendChild(lineDiv);

    const policiesDiv = document.createElement('div');
    policiesDiv.classList.add('policies');
    policiesDiv.innerHTML = `
        <a href="${cookiePolicyUrl}">Informativa Cookies</a> 
        <a href="${privacyPolicyUrl}">Informativa sulla Privacy</a> 
        <a href="${termsConditionsUrl}">Termini e Condizioni</a>
    `;
    containerDiv.appendChild(policiesDiv);

    // const handmadeDiv = document.createElement('div');
    // handmadeDiv.classList.add('marchetta');
    // handmadeDiv.innerHTML = `${handmadeByText} <a href="${handmadeByLinkUrl}" target="_blank">${handmadeByLinkText}</a>`;
    // containerDiv.appendChild(handmadeDiv);

    footer.appendChild(containerDiv);

    // Set the current year
    const yearElement = footer.querySelector('.anno');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Variables for footer content
const copyrightHolder = "AchrisGraphics";
const handmadeByText = "Handmade coded by";
const handmadeByLinkText = "Gabriele Pedesini";
const handmadeByLinkUrl = "https://gabrielepedesini.netlify.app/";
const cookiePolicyUrl = "cookiepolicy.html";
const privacyPolicyUrl = "privacypolicy.html";
const termsConditionsUrl = "termsandconditions.html";

// Call the function to set the footer content on page load
document.addEventListener('DOMContentLoaded', setFooterContent);