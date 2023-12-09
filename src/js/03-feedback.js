// 03-feedback.js

// Import the throttle function from lodash
import throttle from 'lodash.throttle';

// Throttle the function to be called at most once every 500 milliseconds
const saveToLocalStorageThrottled = throttle(saveToLocalStorage, 500);

// Event listener for input changes in the form fields
document
  .querySelector('.feedback-form')
  .addEventListener('input', saveToLocalStorageThrottled);

// Load data from local storage on page load
window.addEventListener('load', loadFromLocalStorage);

// Event listener for form submission
document
  .querySelector('.feedback-form')
  .addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve values from local storage
    const formData = loadFromLocalStorage();

    // Clear local storage
    localStorage.removeItem('feedback-form-state');

    // Clear form fields
    document.querySelector('.feedback-form').reset();

    // Display data in the console
    console.log('Form Data:', formData);
  });

// Function to save form data to local storage
function saveToLocalStorage() {
  const email = document.querySelector('[name="email"]').value;
  const message = document.querySelector('[name="message"]').value;

  const formData = { email, message };

  // Save data to local storage
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Function to load form data from local storage
function loadFromLocalStorage() {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const formData = JSON.parse(storedData);

    // Fill in the form fields with stored data
    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message;

    return formData;
  }

  // If no stored data, return an empty object
  return {};
}
