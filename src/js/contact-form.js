import localStorageAPI from './localstorage.js';

const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const fillContactFormField = () => {
  const userDataFromLS = localStorageAPI.load('contactFormInfo');

  if (userDataFromLS === undefined) {
    return;
  }

  console.log(userDataFromLS);
  console.log(contactFormEl.elements);

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      contactFormEl.elements[key].value = userDataFromLS[key];
    }
  }

  // contactFormEl.elements.user_name.value = userDataFromLS.user_name;
  // contactFormEl.elements.user_email.value = userDataFromLS.user_email;
  // contactFormEl.elements.user_message.value = userDataFromLS.user_message;
};

fillContactFormField();

const onContactFormFieldChange = ({ target: contactFormField }) => {
  const contactFormFieldValue = contactFormField.value;
  const contactFormFieldName = contactFormField.name;

  userData[contactFormFieldName] = contactFormFieldValue;

  localStorageAPI.save('contactFormInfo', userData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorageAPI.remove('contactFormInfo');
};

contactFormEl.addEventListener('change', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
