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
        confirmarSenha: confirmarSenha   
    }
    


    function getDados(){
        const usuarios = JSON.parse(localStorage.getItem(email)) 
        console.log(usuarios);
        
        return usuarios

    }

    function checarNoBanco(){
        const user = getDados()
        
        if (!user) {
            return false  
        }
        
        if(email === user.email){
            alert("Email ja cadastrado")
            console.log(email, user.email);
            return true
        }
        return false
    }

    function senhasIguais(senha,confirmarSenha){
        if(senha !== confirmarSenha){
            alert('As  não conferem')
            return false
        } 
        return true
    }
    senhasIguais(senha,confirmarSenha)

    function checaUserName(nome, sobrenome){
        const users = getDados()
        console.log(users.nome, users.sobrenome)
    }
checaUserName()
    
    function mostrarErro(){}


    function setDados(EmailExiste, senhasIguais){
        const avisoSucesso = document.querySelector('#box-aviso')
        if(EmailExiste, senhasIguais){
            localStorage.setItem(email, JSON.stringify(dadosUser))
            avisoSucesso.style.display = 'flex'
        }
    }
    
    setDados(checarNoBanco(), senhasIguais())
})


 
