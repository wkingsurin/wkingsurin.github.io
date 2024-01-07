export default function createItem(options) {
  let itemBox = document.createElement("div");
  itemBox.classList.add("item-box");

  itemBox.innerHTML = `
    <div class="item-box__column">
    <a href="#" class="image-block item-photo">
        <img src="${options.imageSrc}" alt="${options.imageAlt}" class="image">
    </a>
    <div class="item-box__description-box">
        <div class="item-description">
            <a href="#" class="item-name">${options.name}</a>
            <div class="item__code-box">
                <p>Product code:</p>
                <div class="item__code">${options.code}</div>
            </div>
        </div>
        <div class="item-amount">
            <p class="text">${options.description}</p>
            <div class="amount-block">
                <button class="amount-minus">
                    <div class="image-block">
                        <img src="img/icons/minus-sign.png" alt="Minus">
                    </div>
                </button>
                <span class="amount">1</span>
                <button class="amount-plus">
                    <div class="image-block">
                        <img src="img/icons/plus.png" alt="Plus">
                    </div>
                </button>
            </div>
        </div>
    </div>
    </div>
    <div class="item-box__column item-select">
        <div class="selection-box__item">
            <input type="checkbox" id="check-3" name="checkbox">
            <label for="check-3">Select</label>
        </div>
        <button class="delete-all">Remove</button>
    </div>
    `;

  return itemBox;
}
