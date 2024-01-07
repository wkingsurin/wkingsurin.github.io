export default function clearOrder(options) {
  if (!options.order) return;

  options.products.innerHTML = "You haven't chosen anything";
  options.total.innerHTML = "Empty";
}
