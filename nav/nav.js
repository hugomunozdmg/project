fetch("./nav/nav.html").then(res => res.text()).then(html => {
    document.getElementById("header").innerHTML = html
})



function switchLogin() {
    fetch("./login/login.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
    })
}

function switchNorris() {
    fetch("./norris/norris.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
        fetch("./norris/card/card.html").then(res => res.text()).then(html => {
            document.getElementById("card").innerHTML = html
           searchJoke()

        })
        document.getElementById("user").innerText = user

    })
}


function switchSolarSystem() {
    fetch("./solar_system/solar_system.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
    })
}

function switchDashboard() {
    fetch("./dashboard/dashboard.html").then(res => res.text()).then(html => {
        document.getElementById("main").innerHTML = html
        document.getElementById("user").innerText = user
    })
}

