
// Get input fields
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const cardInput = document.querySelector('.card');
const form = document.querySelector('form');


// Add event listeners to input fields
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
cardInput.addEventListener('input', validateCard);





// Define validation functions
function validateName() {
  const name = nameInput.value.trim();
  if (name.length > 2 && name.includes(' ') ){
    nameInput.classList.add('valid');
    nameInput.classList.remove('invalid');
    nameInput.setCustomValidity('');

  } else {
    nameInput.classList.add('invalid');
    nameInput.classList.remove('valid');
    nameInput.setCustomValidity('Name must contains firstname and lastname.');


  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (!isValidEmail(email)) {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    emailInput.setCustomValidity('Invalid email address.');

  } else {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    emailInput.setCustomValidity('');


  }
}

function validateCard() {
  const card = cardInput.value.trim();
  if (card.length !== 16 || !/^\d+$/.test(card)) {
    cardInput.classList.add('invalid');
    cardInput.classList.remove('valid');
    cardInput.setCustomValidity('Card number must be exactly 16 characters long.');
  } else {
    cardInput.classList.add('valid');
    cardInput.classList.remove('invalid');
    cardInput.setCustomValidity('');
  }
}

function isValidEmail(email) {
  // Use a regular expression to validate email format
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return pattern.test(email);
}
  

function sendEmail(){
alert("Email sent to: test@dn-uk.com")
}



