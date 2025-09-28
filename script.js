const form = document.querySelector(".form")
const mascara = document.querySelector(".mascara-formulario")
function contato(){
    form.style.left ="50%"
    form.style.transform ="translate(-50%)"
    mascara.style.visibility ="visible"
}
function hideForm(){
    form.style.left ="-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility="hidden"
}