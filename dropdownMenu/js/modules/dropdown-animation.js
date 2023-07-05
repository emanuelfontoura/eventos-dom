export default function initDropdownMenu(){
    
}

const dropdownMenus = document.querySelectorAll('[data-dropdown')

dropdownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
    })
})

function handleClick(event){
    event.preventDefault()
    this.classList.toggle('active')
    outsideClick(this, () => {
        this.classList.remove('active')
    })
}

function outsideClick(element, callback){
    const html = document.documentElement
    html.addEventListener('click', handleOutsideClick)
    function handleOutsideClick(event){
        console.log(element)
        callback()
    }
}
