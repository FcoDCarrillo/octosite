'use strict';
const firebaseFunctions = require('firebase-functions');
const mailService = require('./mailService.js');

function sendAdminMail(newUser) {
  const addresses = ["fcocarsor@octatum.com", "roberto.ruiz@octatum.com", "octatumco@gmail.com"];

  let options = {
    from: 'service@octatum.com',
    to: addresses.join(','),
    subject: 'New message on Octatum\'s main site', 
    html: `<ul><li>${newUser.name}</li><li>${newUser.email}</li><li>${newUser.message}</li><li>${newUser.date}</li></ul>`
  };

  mailService.sendMail(options);
};

exports.sendNotificationEmail = firebaseFunctions.firestore
  .document('octatets/{user}')
  .onWrite(event => {
    let newUser = event.data.data();

    sendAdminMail(newUser);
  });