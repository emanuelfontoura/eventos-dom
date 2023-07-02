export default function initTooltip(){
    const toolTips = document.querySelectorAll('[data-tooltip]')

    toolTips.forEach((element) => {
        element.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event){
        const toolTipBox = createToolTipBox(event.currentTarget)
        toolTipBox.style.top = event.pageY + "px"
        toolTipBox.style.left = event.pageX + "px"    

        onMouseLeave.toolTipBox = toolTipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
        onMouseMove.toolTipBox = toolTipBox
        this.addEventListener('mousemove', onMouseMove)
    }

    const onMouseMove = {
        toolTipBox: '',
        handleEvent(event){
            this.toolTipBox.style.top = event.pageY + 20 + "px"
            this.toolTipBox.style.left = event.pageX + 20 + "px" 
        }
    }

    const onMouseLeave = {
        toolTipBox: '',
        element: '',
        handleEvent(){
            this.toolTipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    function createToolTipBox(element){
        const toolTipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        toolTipBox.classList.add('toolTip')
        toolTipBox.innerText = text
        document.body.appendChild(toolTipBox)
        return toolTipBox
    }
}