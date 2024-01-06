import changeHeaderIcon from './modules/changeHeaderIcon.js'
import changeCarouselIcon from './modules/changeCarouselIcon.js'
import setTop from './modules/setTop.js'

import setBorder from './modules/setBorder.js'

import carousel from './modules/carousel.js'

import createNotification from './modules/notification.js'
import createTip from './modules/tip.js'

function init() {
    function cssCorrection() {
        try {
            changeHeaderIcon({
                element: document.querySelector('header'),
                nodeName: 'IMG',
                alt: 'Account',
            })
            changeCarouselIcon({
                element: document.querySelector('.row-box__carousel'),
                type: 'anim',
                id: 'Next'
            })
        
            setTop({
                elements: document.querySelectorAll('.row-box__carousel button'),
                carousel: document.querySelector('.row-box__carousel')
            })
            
            setBorder({
                parent: document.querySelector('.gallery__images-block'),
                image: document.querySelector('.gallery__main-image img')
            })

            carousel({
                element: document.querySelector('.row-box__carousel'),
                carousel: document.querySelector('.row-items'),
                item: document.querySelector('.item-wrapper'),
                buttons: document.querySelectorAll('button[data-type="anim"]'),
                id: 'Next'
            })
        }   catch (err) {
            console.log(err.message)
            return null
        }
    }
    cssCorrection()

    function setTip() {
        try {
            let tip
            let notification
            let cart = document.querySelector('.cart')
            let submit = document.querySelector('.submit')

            submit.addEventListener('click', event => {
                event.preventDefault()

                if (tip) return

                tip = createTip({
                    classList: ['tip'],
                    textContent: 'Added',
                    cursorX: event.clientX,
                    cursorY: event.clientY
                })

                document.body.append(tip)
                setNotification()
                setTimeout(() => tip.style.opacity = 0, 200)
                setTimeout(() => {tip.remove(); tip = null}, 550)
            })

            function setNotification() {
                if (notification != undefined) return

                notification = createNotification({
                    classList: ['notification'],
                    textContent: 1
                })

                cart.append(notification)
            }
        }   catch (err) {
            console.log(err.message)
            return null
        }
    }
    // => here bug
    // setTip()

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

init()