const form = document.querySelector('#form-login')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = document.querySelector('#nome').value
    const sobrenome = document.querySelector('#sobrenome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value
    const confirmarSenha = document.querySelector('#confirmar-senha').value

    const dadosUser = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha,
        confirmarSenha: confirmarSenha,  
    }
    


    function getDados(){
        const usuarios = JSON.parse(localStorage.getItem(email)) 
        return usuarios
    }

    function checarNoEmail(){
        const user = getDados()
        
        if (!user) {
            return false  
        }
        
        if(email === user.email){
            alert("Email ja cadastrado")
            return true
        }
        return false
    }

    function senhasIguais(senha,confirmarSenha){
        if(senha === confirmarSenha){
            return true
        } 
        alert('As senhas não são iguais')
        return false
    }


    function setDados(emailExiste, senhaIguais){
        
        const avisoSucesso = document.querySelector('#box-aviso')
        
        if(!emailExiste && senhaIguais){

            localStorage.setItem(email, JSON.stringify(dadosUser))
            avisoSucesso.style.display = 'flex'
            return true
        }
        return false
    }
    
    setDados(checarNoEmail(), senhasIguais(senha,confirmarSenha))
})


 
