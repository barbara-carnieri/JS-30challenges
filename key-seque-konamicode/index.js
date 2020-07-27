const pressed = [];
const secretCode = 'supermario';

window.addEventListener('keyup', (event) => {
  console.log(event.key);
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    console.log('Yep! That is the secret code!!');
    cornify_add();
  }
  console.log(pressed);
  
})