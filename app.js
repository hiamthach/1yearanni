const firstBullet = document.querySelector('.bullets-1')
const modal = document.querySelector('.modal')
firstBullet.addEventListener('click', function() {
    modal.classList.remove('display-none')
    reduceWidth(lineAnimation, "890px")
})
const lineAnimation = document.querySelector('.line-animation')
function reduceWidth(line, width) {
    line.style.width = width
}