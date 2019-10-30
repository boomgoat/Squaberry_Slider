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

function goToSlide(n) {
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');
  const third = document.querySelector('.third');
    // get all 'a' elements
    var showing = document.getElementsByClassName('slide');
    var pointer = document.getElementsByClassName('dot');
    // loop through all 'a' elements
    for (i = 0; i < showing.length; i++) {
        // Remove the class 'active' if it exists
        showing[i].classList.remove('showing');
    }
    for (i = 0; i < pointer.length; i++) {
      // Remove the class 'active' if it exists
      pointer[i].classList.remove('active');
  }
    // add 'active' classs to the element that was clicked
    if(n==1){
      document.getElementById('first').classList.add('showing');
      first.classList.add('active');
    } else if(n==2){
      document.getElementById('second').classList.add('showing');
      second.classList.add('active');
    } else if(n==3){
      document.getElementById('third').classList.add('showing');
      third.classList.add('active');
    }
    // clearInterval(slide);
    // clearInterval(SlidePointer);
    // setInterval(slide, 7500);
    // setInterval(SlidePointer,7500);
}
goToSlide();

