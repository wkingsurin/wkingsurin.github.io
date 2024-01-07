export default function removeItem(options) {
  if (options.item == undefined) return;

  options.item.remove();
}
