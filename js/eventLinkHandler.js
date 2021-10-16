const parentListener = document.querySelector(".animate-wrapper");
const children = document.querySelectorAll(".animate");
parentListener.addEventListener("click", function (event) {
  children.forEach((element, idx) => {
    if (element.classList.contains("active")) {
      if (idx == 0) {
        location.href = "../html/Events/mae.html";
      } else if (idx == 1) {
        location.href = "../html/Events/informal.html";
      } else if (idx == 2) {
        location.href = "../html/Events/ece.html";
      } else if (idx == 3) {
        location.href = "../html/Events/cse-it.html";
      }
    }
  });
});