fetch("./dashboard/dashboard.html").then(res => res.text()).then(html => {
    document.getElementById("main").innerHTML = html
})

let user
