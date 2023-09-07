/* gallery */

const imageLinks = document.querySelectorAll('.image-link');

imageLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const image = this.querySelector('img');

    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    const fullscreenImageContainer = document.createElement('div');
    fullscreenImageContainer.classList.add('fullscreen-image-container');

    const fullscreenImageElement = new Image();
    fullscreenImageElement.src = image.src;
    fullscreenImageElement.classList.add('fullscreen-image');

    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close-image-button');

    fullscreenImageContainer.appendChild(fullscreenImageElement);
    fullscreenImageContainer.appendChild(closeButton);
    fullscreenContainer.appendChild(fullscreenImageContainer);
    document.body.appendChild(fullscreenContainer);

    closeButton.addEventListener('click', function () {
      document.body.removeChild(fullscreenContainer);
    });

    fullscreenContainer.addEventListener('click', function (event) {
      // Check if the click is outside the image container
      if (!fullscreenImageContainer.contains(event.target)) {
        document.body.removeChild(fullscreenContainer);
      }
    });
  });
});
