'use strict';
const firebaseFunctions = require('firebase-functions');
const mailService = require('./mailService.js');

function sendAdminMail(newUser) {
  const addresses = ["francisco.carrillo@octatum.com", "roberto.ruiz@octatum.com", "octatumco@gmail.com"];
  /* let admins = []
  database.collection('admins').get()
            .then(snapshot => {
              snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
              });
            })
            .catch((err) => {
              console.log('Error getting documents', err);
            }); */

  let options = {
    from: 'service@octatum.com',
    to: addresses.join(','),
    subject: 'Nuevo mensaje en el sitio oficial de Octatum', 
    html: `
          <div>
            <p>Llegó un nuevo mensaje a la página oficial de Octatum.</p>
            <ul>
              <li>Nombre: ${newUser.name}</li>
              <li>Correo: ${newUser.email}</li>
              <li>Mensaje: ${newUser.message}</li>
              <li>Fecha: ${newUser.date}</li>
            </ul>
          </div>`
  };

  mailService.sendMail(options);
};

exports.sendNotificationEmail = firebaseFunctions.firestore
  .document('octatets/{user}')
  .onWrite(event => {
    let newUser = event.data.data();

    sendAdminMail(newUser);
  });