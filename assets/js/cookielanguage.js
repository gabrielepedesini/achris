// cookie language

function setSessionCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

let langBtn = document.querySelectorAll('.lang-btn');

langBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        setSessionCookie("lang-cookie", "true");
    });
});