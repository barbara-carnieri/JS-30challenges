const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('hellooo toggleOpen');
  
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  } 
}

panels.forEach(panels => {
  panels.addEventListener('click', toggleOpen);
})

panels.forEach(panels => {
  panels.addEventListener('transitionend', toggleActive);
})


