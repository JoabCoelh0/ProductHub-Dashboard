import  getDados  from '../model/localStorege.js'
 
const email = document.querySelector('#email')
const senha = document.querySelector('#senha') 
 
const form = document.querySelector('#form-login')

form.addEventListener('submit',(e)=>{
    e.preventDefault

    const usuarios = getDados()
    console.log(usuarios);

    console.log(email.value, senha.value)
})