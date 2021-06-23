window.onload = () => {
  
  // const transition_el = document.querySelector(".transition");

  // setTimeout(() => {
  //   transition_el.classList.remove("is-active");
  // }, 100);

  const buttons = document.getElementsByTagName("button");

  for (const button of buttons) {
    button.addEventListener("click", () => {
      var id = button.getAttribute("id");
      var layerClass = "." + id + "-layer";
      var layers = document.querySelectorAll(layerClass);
      for (const layer of layers) {
        layer.classList.toggle("active");
      }
    });
  }
  
};

function load() {
    setTimeout(() => {
        window.location.href = 'tecnologias.html';
      }, 600);
}

function loadHome() {
  setTimeout(() => {
      window.location.href = 'index.html';
    }, 600);
}
