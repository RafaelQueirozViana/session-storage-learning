const nameInput = document.getElementById("nome-input")
const descricaoInput = document.getElementById("descricao-input");


const saveOnType = ({target}) => {
    sessionStorage.setItem('usuario', target.value)
}

 window.addEventListener('DOMContentLoaded', () => {
const valorSalvo = sessionStorage.getItem('usuario')
if(valorSalvo) {
    nameInput.value = valorSalvo;
    descricaoInput.value = valorSalvo;
}

 })


nameInput.addEventListener('keypress', saveOnType);
descricaoInput.addEventListener('keypress', saveOnType)