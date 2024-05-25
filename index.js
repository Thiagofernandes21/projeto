function botao () {
    const botao = document.querySelector('#botao')
    botao.addEventListener('click', function teste (e){
        e.preventDefault()
        login()
    })
}


function login () {
    const login =  document.querySelector('#login').value
    const senha = document.querySelector('#senha').value
    if (login === 'admin' && senha === 'admin'){
        alert('logado com sucesso')
        location.href = "home.html"
    } else {
        alert('login ou senha inválidos')
    }
}


botao()

