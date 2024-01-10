export default function setTotal(options) {
  if (!options.total) return;

  options.total.innerHTML =
    options.prodValue.innerHTML - options.discount.innerHTML;
}
