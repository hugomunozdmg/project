function searchJoke() {

    fetch("./norris/card/card.html").then(res => res.text()).then(html => {
        document.getElementById("card").innerHTML = html
        getData("https://api.chucknorris.io/jokes/random").then(data => {
            document.getElementById("text").innerText = data.value
            document.getElementById("img").innerHTML = `<img src="${data.icon_url}">`
        })

    })
}


function getData(url) {
    return fetch(url).then(res => res.json())
}