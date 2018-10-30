import anime from 'animejs'
import Rellax from 'rellax'

var rellax = new Rellax('.rellax');


anime({
  targets: '.test',
  translateX: [{
      value: 100,
      duration: 1200
    },
    {
      value: 0,
      duration: 800
    }
  ],
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 2000,
  loop: true
});