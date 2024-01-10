export default function removeItem(options) {
  // let cartBoxItems = document.querySelector(".cart-box__items");
  // let cartBoxHeight = cartBoxItems.getBoundingClientRect().height;
  // let itemHeight = document.querySelector(".item-box").offsetHeight;
  // let height = cartBoxHeight - itemHeight;

  // let test = (cartBoxItems.style.height = height + "px");
  // console.log(height);

  if (options.item == undefined) return;

  options.item.remove();

  if (options.prodValue.innerHTML == 0) return;
  options.prodValue.innerHTML -= 1;
}
