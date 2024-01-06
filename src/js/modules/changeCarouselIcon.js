import condition from "./condition.js"

export default function changeCarouselIcon(options) {
    if (!options.element) return

    options.element.addEventListener('mousemove', event => {
        let target = event.target
        let type = target.dataset.type

        if (condition(type, options.type, '!=')) return

        if (condition(target.id, options.id, '==')) {
            target.closest('button').children[0].src = 'img/icons/next-white.png'
        }   else {
            target.closest('button').children[0].src = 'img/icons/prev-white.png'
        }
    })
    options.element.addEventListener('mouseout', event => {
        let target = event.target
        let type = target.dataset.type

        if (condition(type, options.type, '!=')) return

        if (condition(target.id, options.id, '==')) {
            target.closest('button').children[0].src = 'img/icons/next.png'
        }   else {
            target.closest('button').children[0].src = 'img/icons/prev.png'
        }
    })
}