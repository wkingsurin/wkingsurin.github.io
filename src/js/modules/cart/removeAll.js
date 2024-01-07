export default function removeAll(options) {
  if (!options.list) return;

  options.list.innerHTML = "";
}
