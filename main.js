function hidePCursor(event) {
  event.preventDefault(); // Отменяем стандартное поведение перехода по ссылке
  let pCursor = document.getElementById("cursor");

  pCursor.style.display = "none";
}

document.getElementById("card").addEventListener("click", hidePCursor);
document.getElementById("cursor").addEventListener("click", hidePCursor);
document.getElementById("card-1").addEventListener("click", hidePCursor);