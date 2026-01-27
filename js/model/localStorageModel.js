
export function getDados(email) {
    const data = localStorage.getItem(email)
    return data ? JSON.parse(data) : null
}

export function setDados(email,dadosUser){
    localStorage.setItem(email, JSON.stringify(dadosUser))
}