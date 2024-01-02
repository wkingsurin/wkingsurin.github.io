import changeHeaderIcon from './modules/changeHeaderIcon.js'
import changeCarouselIcon from './modules/changeCarouselIcon.js'
import setTop from './modules/setTop.js'

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
        }   catch (err) {
            return null
        }
    }
    cssCorrection()
}

init()