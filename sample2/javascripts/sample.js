function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", function(e) {
      e.preventDefault();
      alert("le bouton a été cliqué");
    });
  }
  
  window.onload = clickBtn;