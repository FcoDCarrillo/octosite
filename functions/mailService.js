const nodemailer = require('nodemailer');
const credentials = require('./credentials');

module.exports = (function() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: credentials.user,
      pass: credentials.pass
    }
  });

  function sendMail(options) {
    transporter.sendMail(options, (error, info) => {
      if(error) {
        console.log(error);
        return;
      }
      console.log("Message sent:", info);
    });
  }

  return {
    sendMail
  };
})();