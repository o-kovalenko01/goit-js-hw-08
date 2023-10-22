import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

function saveForm() {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

const throttleSaveForm = throttle(saveForm, 500);

emailInput.addEventListener('input', throttleSaveForm);
messageTextarea.addEventListener('input', throttleSaveForm);

function loadForm() {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const feedbackFormState = JSON.parse(savedFormState);
    emailInput.value = feedbackFormState.email;
    messageTextarea.value = feedbackFormState.message;
  }
}

loadForm();

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const feedbackFormState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(feedbackFormState);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
});
