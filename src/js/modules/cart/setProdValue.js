export default function setProdValue(options) {
  if (!options.prodAmount) return;

  options.prodValue.innerHTML = options.prodAmount.innerHTML * 256;
}
