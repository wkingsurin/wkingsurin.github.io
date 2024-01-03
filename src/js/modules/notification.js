export default function notification(options) {
    let notification = document.createElement('div')
    notification.classList.add(...options.classList)
    notification.innerHTML = `<span>${options.textContent}</span>`

    notification.style.left = options.X + 'px'
    notification.style.top = options.Y + 'px'

    return notification
}