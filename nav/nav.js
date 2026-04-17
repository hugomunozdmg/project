/*
Aquí, como es la barra de navegación, tengo las funciones que me sustituyen el
contenido de la etiqueta main según el botón que pulse
*/

function switchLogin() {
    fetch("./login/login.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
    })
}

function switchNorris() {
    fetch("./norris/norris.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
        //Cargo el html de norris.html, dentro, cargo card.html, 
        //y despúes quiero que muestre automaticamente el contenido de un broma
        //La función searchJoke() está en norris.js
        fetch("./norris/card/card.html").then(res => res.text()).then(html => {
            document.getElementById("card").innerHTML = html
           searchJoke()
        })
        document.getElementById("user").innerText = user

    })
}

function switchDashboard() {
    fetch("./dashboard/dashboard.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
        document.getElementById("user").innerText = user
    })
}

