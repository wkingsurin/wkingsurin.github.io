export default function setDiscount(options) {
  if (!options.discount) return;

  console.log(options.prodValue);

  options.discount.innerHTML = Math.trunc(
    (options.prodValue.innerHTML * 10) / 100
  );
}
