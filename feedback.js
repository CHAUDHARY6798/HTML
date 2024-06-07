function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const commentsError = document.getElementById('commentsError');
  
    const namePattern = /^[a-zA-Z]{5,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    commentsError.textContent = '';
  
    if (!name.match(namePattern)) {
      nameError.textContent = 'Name must be at least 5 characters long and contain only letters.';
    }
    if (!email.match(emailPattern)) {
      emailError.textContent = 'Email must be in valid format (e.g., user@example.com).';
    }
    if (phone.length !== 10 || isNaN(phone)) {
      phoneError.textContent = 'Phone number must be exactly 10 digits long and contain only digits.';
    }
    if (comments.length < 20) {
      commentsError.textContent = 'Comments must be at least 20 characters long.';
    }
  
    if (name.match(namePattern) && email.match(emailPattern) && phone.length === 10 && !isNaN(phone) && comments.length >= 20) {
      addCustomerToList(name);
    }
  }
  
  function addCustomerToList(name) {
    const customerList = document.getElementById('customerList');
    const listItem = document.createElement('li');
    listItem.textContent = name;
    customerList.appendChild(listItem);
  }
  