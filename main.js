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

const SlideControls = () => {
  const active = document.querySelector('.showing');
  if(document.getElementById('1').classList.contains('showing')){
    const one = document.getElementsByClassName('1');
    one
    .classList
    .add('active');
  }
}