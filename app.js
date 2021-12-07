const bullets = document.querySelectorAll('.bullets')
const lineAnimation = document.querySelector('.line-animation')
const lineAniWidth = ['1050px', '890px', '650px', '490px', 0]
for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', function() {
        openModal(i+1, bullets[i])
        
    })
}

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