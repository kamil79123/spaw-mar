$(document).ready(function() {
    // Zapisz oryginalny kolor obiektu
    var originalColor = $("#colorChangingObject").css("background-color");

    // Dodaj zdarzenie przewijania
    $(window).scroll(function() {
      // Jeśli strona jest przewinięta w dół
      if ($(this).scrollTop() > 0) {
        // Zmień kolor obiektu
        $("#nav-container").css("background-color", "black");
      } else {
        // Przywróć oryginalny kolor obiektu
        $("#nav-container").css("background-color", "rgba(0, 0, 0, 0.3)");
      }
    });
  });