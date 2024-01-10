import changeHeaderIcon from "./modules/changeHeaderIcon.js";
import changeCarouselIcon from "./modules/changeCarouselIcon.js";
import setTop from "./modules/setTop.js";

import setBorder from "./modules/setBorder.js";

import carousel from "./modules/carousel.js";

import createNotification from "./modules/notification.js";
import createTip from "./modules/tip.js";

import setHandler from "./modules/setHandler.js";
import removeAll from "./modules/cart/removeAll.js";
import clearOrder from "./modules/cart/clearOrder.js";
import createItem from "./modules/cart/createItem.js";
import removeItem from "./modules/cart/removeItem.js";

import selectItem from "./modules/cart/selectItem.js";

import increaseItem from "./modules/cart/increaseItem.js";
import setProdAmount from "./modules/cart/setProdAmount.js";
import setDiscount from "./modules/cart/setDiscount.js";
import setProdValue from "./modules/cart/setProdValue.js";
import setTotal from "./modules/cart/setTotal.js";

function init() {
  function cssCorrection() {
    try {
      changeHeaderIcon({
        element: document.querySelector("header"),
        nodeName: "IMG",
        alt: "Account",
      });
      changeCarouselIcon({
        element: document.querySelector(".row-box__carousel"),
        type: "anim",
        id: "Next",
      });

      setTop({
        elements: document.querySelectorAll(".row-box__carousel button"),
        carousel: document.querySelector(".row-box__carousel"),
      });

      setBorder({
        parent: document.querySelector(".gallery__images-block"),
        image: document.querySelector(".gallery__main-image img"),
      });

      carousel({
        element: document.querySelector(".row-box__carousel"),
        carousel: document.querySelector(".row-items"),
        item: document.querySelector(".item-wrapper"),
        buttons: document.querySelectorAll('button[data-type="anim"]'),
        id: "Next",
      });
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
  cssCorrection();

  function setTip() {
    try {
      let tip;
      let notification;
      let cart = document.querySelector(".cart");
      let submit = document.querySelector(".submit");

      submit.addEventListener("click", (event) => {
        event.preventDefault();

        if (tip) return;

        tip = createTip({
          classList: ["tip"],
          textContent: "Added",
          cursorX: event.clientX,
          cursorY: event.clientY,
        });

        document.body.append(tip);
        setNotification();
        setTimeout(() => (tip.style.opacity = 0), 200);
        setTimeout(() => {
          tip.remove();
          tip = null;
        }, 550);
      });

      function setNotification() {
        if (notification != undefined) return;

        notification = createNotification({
          classList: ["notification"],
          textContent: 1,
        });

        cart.append(notification);
      }
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
  // => here bug
  // setTip()

  // TEST =======
  document.querySelector(".cart-box__items").append(
    createItem({
      name: "Nike Air Force 3",
      imageSrc: "img/sneakers/3.jpg",
      imageAlt: "Nike Air Force 3",
      code: 75645,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem debitis, cumque obcaecati pariatur et ratione repellendus ducimus id repudiandae mollitia praesentium vel placeat quas quam vero possimus. Reiciendis, suscipit?",
    })
  );
  document.querySelector(".cart-box__items").append(
    createItem({
      name: "Nike Air Force 3",
      imageSrc: "img/sneakers/3.jpg",
      imageAlt: "Nike Air Force 3",
      code: 75645,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem debitis, cumque obcaecati pariatur et ratione repellendus ducimus id repudiandae mollitia praesentium vel placeat quas quam vero possimus. Reiciendis, suscipit?",
    })
  );
  // =============

  setProdAmount({
    parent: document.querySelector(".cart-box__items"),
    prodAmount: document.querySelector(".prod-value"),
  });
  setProdValue({
    prodAmount: document.querySelector(".prod-value"),
    prodValue: document.querySelector(".prod-all .value"),
  });
  setDiscount({
    prodValue: document.querySelector(".prod-all .value"),
    discount: document.querySelector(".row-item_discount .value"),
  });
  setTotal({
    total: document.querySelector(".total .value"),
    prodValue: document.querySelector(".prod-all .value"),
    discount: document.querySelector(".row-item_discount .value"),
  });

  selectItem({
    item: document.querySelector(".item-box"),
  });

  setHandler({
    element: document.querySelector(".delete-all"),
    event: "click",
    handler: function () {
      removeAll({
        list: document.querySelector(".cart-box__items"),
        clear: clearOrder({
          order: document.querySelector(".place-order"),
          products: document.querySelector(".products"),
          total: document.querySelector(".total .products-row"),
        }),
      });
    },
  });

  setHandler({
    element: document.querySelector(".cart-box__items"),
    event: "click",
    handler: function (event) {
      if (!event.target.classList.contains("delete-all")) return;

      removeItem({
        item: event.target.closest(".item-box"),
        prodAmount: document.querySelector(".prod-value"),
      });
    },
  });

  setHandler({
    element: document.querySelector(".cart-box__items"),
    event: "click",
    handler: function (event) {
      increaseItem({
        item: event.target.closest(".item-box"),
        prodAmount: document.querySelector(".prod-value"),
        prodValue: document.querySelector(".prod-all .value"),
        discount: document.querySelector(".row-item_discount .value"),
        total: document.querySelector(".total .value"),
      });
    },
  });
  // document.addEventListener('mouseout', event => {
  //     let tip

  //     if (!document.querySelector('.tip')) return

  //     tip = document.querySelector('.tip')
  //     setTimeout(() => tip.style.opacity = 0, 800)
  //     setTimeout(() => tip.remove(), 1300)
  // })

  // document.addEventListener('mousemove', event => {
  //     let tip

  //     if (!document.querySelector('.tip')) return

  //     tip = document.querySelector('.tip')
  //     tip.style.left = event.clientX + 10 + 'px'
  //     tip.style.top = event.clientY + 20 + 'px'
  // })
}

init();
