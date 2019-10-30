const first = document.querySelector('.slide');
console.log(first);

const slide = () => {
  const before = document.querySelector('.showing');
  if (before) {
    before
      .classList
      .remove('showing');
    const next = before.nextElementSibling;
    if (next) {
      next
        .classList
        .add('showing');
    } else {
      first
        .classList
        .add('showing');
    }
  } else {
    first
      .classList
      .add('showing');
  }
}
slide();
setInterval(slide, 7500);

const SlidePointer = () => {
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');
  const third = document.querySelector('.third');
  const active = document.querySelector('.showing');
  if(document.getElementById('first').classList.contains('showing')){
    third
      .classList
      .remove('active');
    first
      .classList
      .add('active');
  } else if(document.getElementById('second').classList.contains('showing')){
    first
      .classList
      .remove('active');
    second
      .classList
      .add('active');
  } else if(document.getElementById('third').classList.contains('showing')){
    second
      .classList
      .remove('active');
    third
      .classList
      .add('active');
  }
}
SlidePointer();
setInterval(SlidePointer, 7500);

function goToSlide(elem) {
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');
  const third = document.querySelector('.third');
  var element = elem;
    // get all 'a' elements
    var showing = document.getElementsByClassName('slide');
    // loop through all 'a' elements
    for (i = 0; i < showing.length; i++) {
        // Remove the class 'active' if it exists
        showing[i].classList.remove('showing')
    }
    // add 'active' classs to the element that was clicked
    if(element.classList.contains('first')){
      document.getElementById('first').classList.add('showing');
    }
}
goToSlide();

