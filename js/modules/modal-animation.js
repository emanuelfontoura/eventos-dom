export default function initModal(){
    const modalContainer = document.querySelector('[data-modal="container"]')
    const eventsHandleClick = document.querySelectorAll('[data-modal="open"], [data-modal="close"]')

    if(eventsHandleClick && modalContainer){
        function toggleModal(event){
            modalContainer.classList.toggle('ativo')
        }

        function outModalCLick(event){
            if(event.target === this){
                toggleModal(event)
            }
        }

        modalContainer.addEventListener('click', outModalCLick)

        eventsHandleClick.forEach(element => {
            element.addEventListener('click', toggleModal)
        })
    }
}