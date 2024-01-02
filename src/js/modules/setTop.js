export default function setTop(element, options) {
    let elementHalfHeight = 0
    let carouselHalfHeight = 0
    let halfHeight = 0

    if (options.carousel) {
        carouselHalfHeight = options.carousel.clientHeight / 2
    }
    elementHalfHeight = element.clientHeight / 2

    halfHeight = carouselHalfHeight - elementHalfHeight

    element.style.top = halfHeight + 'px'
}