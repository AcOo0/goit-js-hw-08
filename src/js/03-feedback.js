import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
let formValue = {};

form.addEventListener('input', throttle(saveForm, 500));
form.addEventListener('submit', submitForm);

let data = JSON.parse(localStorage.getItem('feedback-form-state'));

try {
  email.value = data.email || '';
  message.value = data.message || '';
} catch (error) {
  console.log('storage empty');
}

function saveForm(e) {
    if (data) { 
        formValue = data;
    }
    formValue[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
    // console.log(formValue);
};

function submitForm(e) { 
  e.preventDefault();
  if (email.value.trim() === '' || message.value === '') {
    alert('Ой! Щось пішло не так! Заповніть всі поля!')
  } else {
    console.log(formValue);
    localStorage.clear();
    e.target.reset();
    formValue = {};
    data = {}
  }
};