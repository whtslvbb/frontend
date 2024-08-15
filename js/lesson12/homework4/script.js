const changeColor = () =>{
    event.target.style.color = `${event.target.textContent}`
}

const arrColor = document.querySelectorAll('.color')

arrColor.forEach((value) => {
    value.addEventListener('click' , changeColor)
})