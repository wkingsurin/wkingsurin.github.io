export default function tip(options) {
    let tip = document.createElement('div')
    tip.classList.add(...options.classList)
    tip.textContent = options.textContent

    tip.style.left = options.cursorX + 10 + 'px'
    tip.style.top = options.cursorY + 20 + 'px'

    return tip
}