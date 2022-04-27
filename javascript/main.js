document.getElementById("dropdown").onclick = function () {
  document.getElementById("myDropdown").classList.toggle("show");
};

window.onscroll = function () {
  window.pageYOffset > 0
    ? navbar.classList.add("scroll-header")
    : navbar.classList.remove("scroll-header");
};
