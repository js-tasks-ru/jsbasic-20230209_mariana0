function toggleText() {
  btn = document.querySelector('.toggle-text-button');
  text = document.querySelector('#text');

  btn.onclick = function() {
    text.hidden = !text.hidden;
  };
};
