function debounce(func, wait = 20, immediate = true) {
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
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
  // console.count(event);
  console.log(window.scrollY);
  
  sliderImages.forEach(slideImage => {
    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    // console.log(slideInAt);
    //botton of the image
    const imageBotton = slideImage.offsetTop + slideImage.height;
    const isHalfShow = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBotton;
    if(isHalfShow && isNotScrolledPast){
      slideImage.classList.add('active');
    } else {
      slideImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));