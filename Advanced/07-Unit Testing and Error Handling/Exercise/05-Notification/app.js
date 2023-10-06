function notify(message) {

  const notification = document.querySelector('#notification');

  notification.style.display = 'block';
  notification.textContent = message;

  notification.addEventListener('click', hideNotification);

  function hideNotification(event) {
    notification.style.display = 'none';
  }
}