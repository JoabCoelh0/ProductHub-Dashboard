import {checaEmail, senhaCompativeis} from "../service/authService.js"

const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const form = document.querySelector('#form-login')
   
form.addEventListener('submit',(e) => {
    e.preventDefault() 
    const emailValido = checaEmail(email.value)
    const senhaValida = senhaCompativeis(email.value, senha.value) 
    if(emailValido.success && senhaValida.success){
        window.location.href = 'dashboard.html'
    }
    
}) 