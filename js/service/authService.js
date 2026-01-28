import { getDados } from "../model/localStorageModel.js";


export function checaEmail(email){
    const dados = getDados(email)
    if(dados !== null){
        return { success: true, message: 'Acesso liberado' }
    } else {
        return { success: false, message: 'Email ou senha inválidos' }
    }
}

export function senhaCompativeis(email, senha){
    const dados = getDados(email)
    if(senha === dados.senha){
        return { success: true, message: 'Acesso liberado' }
        
    } else {
        return { success: false, message: 'Email ou senha inválidos' }
    }
}   
/*
const emailValido = checaEmail(email.value)
const senhaValida = senhaCompativeis(email.value, senha.value) 

liberarAcesso(emailValido, senhaValida)
*/