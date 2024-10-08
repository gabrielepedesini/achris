/* cursor */

window.addEventListener("load", () => {

  const cursorDot = document.createElement('div');
  const cursorOutline = document.createElement('div');
  
  cursorDot.classList.add('cursor-dot');
  cursorOutline.classList.add('cursor-outline');
  
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);
  
  document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;
  
    cursorOutline.animate({
      left: `${x}px`,
      top: `${y}px`,
    }, { duration: 300, fill: "forwards" });
  });
  
  document.querySelectorAll('a, button, .image-link, .checkbox span, .flag-container span, .hamburger, .policies a').forEach((element) => {
    element.addEventListener('mouseover', () => {
      cursorOutline.style.width = '60px';
      cursorOutline.style.height = '60px';
    });
    element.addEventListener('mouseout', () => {
      cursorOutline.style.width = '40px';
      cursorOutline.style.height = '40px';
    });
  });
  
  // fullscreen handling
  
  document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
          document.body.style.cursor = 'default';
      } else {
          document.body.style.cursor = 'none';
      }
  });
  
  // hide cursor on mobile
  
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
  }

}) 