export default function setProdAmount(options) {
  if (!options.prodAmount) return;

  let length = options.parent.children.length;
  options.prodAmount.innerHTML = length;
}
