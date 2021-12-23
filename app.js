const bullets = document.querySelectorAll('.bullets')
const lineAnimation = document.querySelector('.line-animation')
const lineAniWidth = ['1050px', '890px', '650px', '490px', 0]

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', function() {
        if (index == 0) {
            hideArrow()
        }
        openModal(index+1, bullet)
    })
})

function openModal(index, bullet) {
    const modal = document.querySelector(`.modal-${index}`)
    const cardClose = modal.querySelector('.card-close')
    modal.classList.remove('display-none')
    cardClose.addEventListener('click', function() {
        modal.classList.add('display-none')
        if (!bullet.classList.contains('timeDone')) {
            lineAnimation.style.width = lineAniWidth[index]
            bullet.classList.add('timeDone')
        }
    })
}

function hideArrow() {
    const arrow = document.querySelector('.first-date-arrow')
    arrow.classList.add('display-none')
}