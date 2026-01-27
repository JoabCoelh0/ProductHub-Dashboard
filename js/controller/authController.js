import { setDados,  getDados } from "../model/localStorageModel.js"

export function senhasIguais(senha,confirmarSenha){
    return senha === confirmarSenha
}

export function emailExiste(email) {
    const user = getDados(email)
    return user !== null
}


export function registrarUsuario(dadosUser){

    if(emailExiste(dadosUser.email)){
        return {success: false, message: 'Email já cadastrado'}
    }


    if(!senhasIguais(dadosUser.senha, dadosUser.confirmarSenha)){
        return {success: false, message: 'Senhas não conferem'}
    }


    setDados(dadosUser.email, dadosUser)
    return {success: true}
}