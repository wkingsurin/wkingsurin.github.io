export default function setTop(options) {
    let elementHalfHeight = 0
    let carouselHalfHeight = 0
    let halfHeight = 0

    if (options.carousel) {
        carouselHalfHeight = options.carousel.clientHeight / 2
    }
    elementHalfHeight = options.elements[0].clientHeight / 2

    halfHeight = carouselHalfHeight - elementHalfHeight

    options.elements.forEach(element => {
        element.style.top = halfHeight + 'px'
    })
}