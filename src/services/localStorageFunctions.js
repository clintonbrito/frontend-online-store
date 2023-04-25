export function getItem() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}
