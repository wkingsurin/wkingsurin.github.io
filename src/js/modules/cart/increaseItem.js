import setDiscount from "./setDiscount.js";
import setProdValue from "./setProdValue.js";
import setTotal from "./setTotal.js";

export default function increaseItem(options) {
  if (!options.item) return;

  let target = event.target;
  let amount = event.target.closest(".item-box").querySelector(".amount");

  let prodAmount = options.prodAmount;
  let prodValue = options.prodValue;
  let discount = options.discount;
  let total = options.total;

  if (!target.closest("BUTTON")) return;
  target = target.closest("BUTTON");

  if (target.classList.value.match(/plus/)) {
    amount.innerHTML = +amount.innerHTML + 1;
    prodAmount.innerHTML = +prodAmount.innerHTML + 1;
  } else {
    if (amount.innerHTML == 1) return;
    amount.innerHTML = +amount.innerHTML - 1;
    prodAmount.innerHTML = +prodAmount.innerHTML - 1;
  }

  setProdValue({
    prodAmount,
    prodValue,
  });
  setDiscount({
    discount,
    prodValue,
  });
  setTotal({
    total,
    prodValue,
    discount,
  });
  //   total.innerHTML = prodValue.innerHTML - discount.innerHTML;
}
