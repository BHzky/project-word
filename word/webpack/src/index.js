import './style.css'
import Icon from '../webpack.png'
import printMe from './print'

function component() {

  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
  
  var element = document.createElement('div');
  element.innerHTML = 'Hello webpack';

  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  var btn = document.createElement('button');
  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}