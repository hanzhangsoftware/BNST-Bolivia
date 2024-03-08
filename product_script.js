function changeQuantity(change) {
  var quantityInput = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + change;

  // Ensure the quantity is never less than 1
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  quantityInput.value = newQuantity;
}
