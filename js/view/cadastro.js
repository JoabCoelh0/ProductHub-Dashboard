import { registrarUsuario } from "../controller/authController.js"

const form = document.querySelector('#form-login')
const aviso = document.querySelector('#box-aviso')

form.addEventListener('submit',(e) => {
    e.preventDefault() 

    const dadosUser = {
        nome: document.querySelector('#nome').value,
        sobrenome: document.querySelector('#sobrenome').value,
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value,
        confirmarSenha: document.querySelector('#confirmar-senha').value,  
    }

    
    const result = registrarUsuario(dadosUser)
    if(result.success){
        aviso.style.display = "flex"
        form.reset()
    } else {
        alert(result.message)
    }
    
})