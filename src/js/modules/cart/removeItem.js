export default function removeItem(options) {
  if (options.item == undefined) return;

  console.log("work");
  options.item.remove();
}
