let url = "http://recipepuppyproxy.herokuapp.com/api/?q=";

let input = document.querySelector("input");

input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        searchText = e.target.value;
        url += searchText;
        axios.get(url).then(function (response) {
            console.log(response.data);
        })

    }
    for (let i = 0; i < data.length; i++) {

    }
})
