// import condition from "./condition.js"

export default function carousel(options) {
    let element = options.element

    element.addEventListener('touchstart', event => {
        // let target = event.target
        console.log('event start')
    })

    element.addEventListener('touchmove', event => {
        // let target = event.target

        console.log('touchmove')
    })
}