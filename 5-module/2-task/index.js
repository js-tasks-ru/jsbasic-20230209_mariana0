function toggleText() {
  window.onload = function() {
    btn = document.querySelector('.toggle-text-button');
    text = document.querySelector('#text');
    btn.onclick = function() {
      text.classList.toggle('hidden');
    };
  };
}
