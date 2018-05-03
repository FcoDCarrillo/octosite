export function debounce(func, wait, immediate) {
  var timeout;
  
	return function() {
    var context = this, args = arguments;
    
		var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    var callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    
		timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
	};
};

export function throttle (func, limit) {
  let inThrottle
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!inThrottle) {
      func.apply(context, args)
      lastRan = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export function setPageTitle(title) {
  document.title = `${title} - Lucía Corona`;
}