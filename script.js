// Register Page 
const registerForm = document.querySelector('#register-form');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Registration successful! Welcome to SAR.");
  });
}

// Booking Page 
const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Event booked successfully!");
  });
}

// History Page 
const historyForm = document.querySelector('#history-form');
if (historyForm) {
  historyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const event = document.getElementById('select-event').value;
    alert("Showing materials for: " + event);
  });
}