function toggleText() {
  const btn = document.querySelector(".toggle-text-button");
  const content = document.querySelector(".text");

  btn.addEventListener("click", btnClick);

  function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
      btn.textContent = "Скрыть элемент";
    } else {
      btn.textContent = "Показать элемент";
    }

    content.classList.toggle("hidden");
  }
}
