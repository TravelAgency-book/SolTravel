const form = document.getElementById('contact-form');
const messageBox = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    messageBox.textContent = `Thanks, ${name}! Your request has been sent. We'll contact you soon.`;
    form.reset();
  });
}
