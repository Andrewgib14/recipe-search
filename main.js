let url = "http://recipepuppyproxy.herokuapp.com/api/?q=";

let input = document.querySelector("input");
let grid = document.querySelector(".grid");

input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        grid.innerHTML = "";
        let searchText = e.target.value;
        url += searchText;
        axios.get(url).then(function (response) {
            let results = response.data.results;
            for (let i = 0; i < results.length; i++) {
                let thumbnail = results[i].thumbnail;
                let currentTitle = results[i].title;
                let currentLink = results[i].href;
                if (thumbnail === "") {
                    thumbnail = "img/fork-img.jpg"
                }
                grid.innerHTML += `<div class="recipe" style="background-image: url(${thumbnail})"><p><span>Dish:</span> <a href=${currentLink}>${currentTitle}</a></p></div>`

                url = "http://recipepuppyproxy.herokuapp.com/api/?q=";
            }
        })

    }

})
