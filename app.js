document.addEventListener('DOMContentLoaded', function (create) {
    var para = document.getElementById("p");
    var search = document.getElementById("input");
    var list = document.getElementById('list');

    document.getElementById("search-button").addEventListener("click", function (e) {
        e.preventDefault();
        if (search.value == "") {
            fetch('superheroes.php')
                .then(response => response.json())
                .then(superhero => {
                    superhero.forEach(function (value) {
                        var hero = document.createElement('li');
                        hero.appendChild(document.createTextNode(value));
                        list.appendChild(hero);
                    });
                })
        } else {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                    } else {
                        alert("Error fetching superheroes");
                    }
                }
            }
            xhr.open("GET", "superheroes.php?q=" + search.value, true);
            xhr.send();
        }
    })
})




