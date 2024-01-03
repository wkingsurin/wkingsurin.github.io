import changeHeaderIcon from './modules/changeHeaderIcon.js'
import changeCarouselIcon from './modules/changeCarouselIcon.js'
import setTop from './modules/setTop.js'

import setBorder from './modules/setBorder.js'

import carousel from './modules/carousel.js'

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
}

init()