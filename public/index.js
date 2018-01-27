function isInViewport(element) {
  var bounding = element.getBoundingClientRect();

  // At least 50% of element is shown
  return bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

(function() {
  const emailSection = document.querySelector('div.email-form');
  const navbar = document.querySelector('navbar.nav');

  window.addEventListener('scroll', function() {
    if(isInViewport(emailSection)) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  });
})();

(function() {
  const navbarLinks = document.querySelectorAll("a[data-section]");

  navbarLinks.forEach(link => link.addEventListener('click', event => {
      event.preventDefault();

      document.getElementById(link.dataset.section).scrollIntoView({
          behavior: 'smooth'
      });
  }));
})();


(function() {
  let firestore = firebase.firestore();
  const statusList = {
    default: 'default',
    processing: 'processing',
    success: 'success'
  };
  
  const octatetsCollection = firestore.collection("octatets");
  const emailInput = document.querySelector('div.email-input');
  const form = document.querySelector('#subscribe-form');
  const nameField = form.elements.name;
  const emailField = form.elements.email;
  const messageField = form.elements.message;
  const formSection = document.querySelector('.email-section');
  window.alert = null;

  function setFormClass(formClass) {
    statusList.forEach(status => {
      formSection.classList.remove(status);
    });
    formSection.classList.add(status);
  }

  function changeCurrentStatusTo(status) {
    switch(status) {
      case statusList.processing:
        setFormClass(statusList.processing);
        break;
      case statusList.success:
        setFormClass(statusList.success);
        break;
      default:
        setFormClass(statusList.default);
        break;
    }
  };

  document.querySelector('button.botonEnviar').addEventListener('click', (event) => {
    emailInput.classList.remove('invalid-input');
    if(form.checkValidity()) {
      event.preventDefault();
      changeCurrentStatusTo(statusList.processing);

      if(!isValidEmail(emailField.value)) {
        emailInput.classList.add('invalid-input');
        changeCurrentStatusTo(statusList.default);
        return;
      }      

      octatetsCollection.add({
        name: nameField.value,
        email: emailField.value,
        message: messageField.value
      })
      .then((success) => {
        changeCurrentStatusTo(statusList.success);        
        console.log("Success!", success);
      })
      .catch((error) => {
        changeCurrentStatusTo(statusList.default);
        console.log("Error", error);
      });
    }
  });
})();