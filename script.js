document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      products.forEach((product) => {
        if (
          filter === "all" ||
          product.getAttribute("data-category") === filter
        ) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});
