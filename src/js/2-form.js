const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

// перевірка чи є вже дані в localStorage, якщо так, заповнюємо ними форму
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  // самі заповнюємо поля вручну
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// делегування
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// обробка submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // перевірка на заповнені поля
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
    }
    
      console.log(formData);

      localStorage.removeItem(STORAGE_KEY);

      formData = { email: '', message: '' };

      form.reset();
});
