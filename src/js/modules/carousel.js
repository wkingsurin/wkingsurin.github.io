export default function carousel(options) {
    if (!options.element) return

    let left = 0
    let coords = options.carousel.getBoundingClientRect()
    let maxLeft = -coords.width
    let slideWidth = options.item.getBoundingClientRect().width
    let buttons = Array.from(options.buttons)

    buttons.forEach(button => button.style.opacity = 0)

    options.element.addEventListener('mouseover', event => {
        buttons.forEach(button => button.style.opacity = 1)
    })
    options.element.addEventListener('mouseout', event => {
        buttons.forEach(button => button.style.opacity = 0)
    })

    options.element.addEventListener('click', event => {
        let target = event.target
        
        if (!(target.closest('BUTTON'))) return
        target = target.closest('BUTTON')
        
        if (target.id == options.id) {
            left -= slideWidth

            if (left < maxLeft) {
                left = maxLeft
            }
            options.carousel.style.left = left + 'px'
        }   else {
            left += slideWidth

            if (left > 0) {
                left = 0
            }
            options.carousel.style.left = left + 'px'
        }
    })
}