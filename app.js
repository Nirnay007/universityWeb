var navLinks = document.getElementById('navLinks');

function showMenu() {
  navLinks.style.right = '0';
}
function hideMenu() {
  navLinks.style.right = '-200px';
}

function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'Nirnay Majumder',
    Password: 'janina007!',
    To: 'majumderrniru007@gmail.com',
    From: document.getElementById('email').value,
    Subject: 'New Contact Form Enquiry',
    Body:
      'Name: ' +
      document.getElementById('name').value +
      '<br> Email: ' +
      document.getElementById('email').value +
      '<br> Subject: ' +
      document.getElementById('subject').value +
      '<br> Message: ' +
      document.getElementById('message').value,
  }).then((message) => alert('Message Sent Successfully'));
}
