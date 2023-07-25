const btn = document.querySelector('#menu-btn')
const nav = document.querySelector('#menu')

const handleClick = () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
}

btn.addEventListener('click', handleClick)