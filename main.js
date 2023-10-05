

 document.getElementById("card").addEventListener("click", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение перехода по ссылке
    let pCursor = document.getElementById("cursor");

    pCursor.style.display = "none";
  });