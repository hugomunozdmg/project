//He cargado los html que quiero que se muestren en la primera visualización

fetch("./nav/nav.html").then(res => res.text()).then(html => {
    document.getElementById("header").innerHTML = html
})

fetch("./dashboard/dashboard.html").then(res => res.text()).then(html => {
    document.getElementById("main").innerHTML = html
})

//He colocado la variable user porque la voy a usar en varios sitios
//(se muestra el nombre en todas las páginas)
let user
