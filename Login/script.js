function Ingresar(){
    const usu = document.getElementById('Usuario').value
    const pass = document.getElementById('Contraseña').value
    console.log(usu,pass)

    if(usu == 'MaxiMatsuno' && pass == 'michaeljackson1317'){
        window.location.href = 'welcome.html'
    }else{
        alert('¡Error! El usuario o contraseña que has coloca es incorrecto, por favor ingreselo nuevamente')
    }
}
function redireccion(){
    location.href = "index2.html"
}