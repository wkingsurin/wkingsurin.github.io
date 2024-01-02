export default function setBorder(options) {
    let imageBlocks = Array.from(options.parent.children)

    options.parent.addEventListener('mouseover', event => {
        let target = event.target

        if (target.closest('.image-block')) {
            target = target.closest('.image-block')

            target.classList.add('pre-active')
            if (!target.classList.contains('active')) {
                target.style.border = '2px solid var(--main-g33)'
            }
        }
    })

    options.parent.addEventListener('mouseout', event => {
        let target = event.target

        if (target.closest('.image-block')) {
            target = target.closest('.image-block')

            target.classList.remove('pre-active')
            target.style.border = ''
        }
    })

    options.parent.addEventListener('click', event => {
        let target = event.target

        imageBlocks.forEach(child => {
            if (child.classList.contains('pre-active')) {
                options.image.src = child.children[0].src
            }

            child.style.border = ''
            child.classList.remove('active')
        })

        if (target.closest('.image-block')) {
            target = target.closest('.image-block')
        
            target.classList.add('active')
        }
    })
}