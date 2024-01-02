import changeHeaderIcon from './modules/changeHeaderIcon.js'
import changeCarouselIcon from './modules/changeCarouselIcon.js'
import setTop from './modules/setTop.js'

import setBorder from './modules/setBorder.js'

function init() {
    function cssCorrection() {
        try {
            changeHeaderIcon({
                element: document.querySelector('header'),
                nodeName: 'IMG',
                alt: 'Account',
            })
            changeCarouselIcon({
                element: document.querySelector('.carousel-buttons'),
                type: 'anim',
                id: 'Next'
            })
        
            setTop(document.querySelector('.carousel-buttons'), {
                carousel: document.querySelector('.row-box__carousel')
            })
            
            setBorder({
                parent: document.querySelector('.gallery__images-block'),
                image: document.querySelector('.gallery__main-image img')
            })
        }   catch (err) {
            console.log(err.message)
            return null
        }
    }
    cssCorrection()
}

init()