export default function changeIcon(header = document.querySelector('.header')) {
    header.addEventListener('mousemove', event => {
        if (event.target.nodeName != 'IMG') return

        if (event.target.alt == 'Account') {
            event.target.src = 'img/icons/account-hover.png'
        }   else {
            event.target.src = 'img/icons/cart-hover.png'
        }
    })

    header.addEventListener('mouseout', event => {
        if (event.target.nodeName != 'IMG') return

        if (event.target.alt == 'Account') {
            event.target.src = 'img/icons/account.png'
        }   else {
            event.target.src = 'img/icons/cart.png'
        }
    })
}