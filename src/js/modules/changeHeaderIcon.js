import condition from "./condition.js"

export default function changeIcon(options) {
    options.element.addEventListener('mousemove', event => {
        let target = event.target

        if (condition(target.nodeName, options.nodeName, '!=')) return

        if (condition(target.alt, options.alt, '==')) {
            target.src = 'img/icons/account-hover.png'
        }   else {
            target.src = 'img/icons/cart-hover.png'
        }
    })

    options.element.addEventListener('mouseout', event => {
        let target = event.target

        if (condition(target.nodeName, options.nodeName, '!=')) return

        if (condition(target.alt, options.alt, '==')) {
            target.src = 'img/icons/account.png'
        }   else {
            target.src = 'img/icons/cart.png'
        }
    })
}