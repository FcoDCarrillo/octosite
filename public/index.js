function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

function isInViewport(element) {
  const elementBounds = element.getBoundingClientRect();
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
  const viewportTop = ((window.pageYOffset || document.scrollTop)  - (document.clientTop || 0)) || 1;
  const viewportBottom = viewportTop + viewportHeight;

  const displayedArea = elementBounds.height - (elementBounds.bottom - viewportHeight);

  return displayedArea > 0.5 * elementBounds.height;
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

(function() {
  const emailSection = document.querySelector('.email-section');
  const navbar = document.querySelector('nav.nav');

  function handleScroll() {
    if(isInViewport(emailSection)) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  }
  const throttledHandleScroll = throttle(handleScroll, 100);

  window.addEventListener('scroll', throttledHandleScroll);
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

  function setFormClass(formClass) {
    for(let status in statusList) {
      formSection.classList.remove(statusList[status]);
    }
    formSection.classList.add(formClass);
  };

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

  function isCaptchaChecked() {
    return grecaptcha && grecaptcha.getResponse().length !== 0;
  }

  function getCurrentDateString() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
  }

  document.querySelector('button.botonEnviar').addEventListener('click', (event) => {
    emailInput.classList.remove('invalid-input');
    if(form.checkValidity()) {
      event.preventDefault();
      if(!isCaptchaChecked()) return;
      changeCurrentStatusTo(statusList.processing);

      if(!isValidEmail(emailField.value)) {
        emailInput.classList.add('invalid-input');
        changeCurrentStatusTo(statusList.default);
        return;
      }      

      octatetsCollection.add({
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
        date: getCurrentDateString()
      })
      .then((success) => {
        changeCurrentStatusTo(statusList.success);
      })
      .catch((error) => {
        changeCurrentStatusTo(statusList.default);
        console.log("Error", error);
      });
    }
  });
})();