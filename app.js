document.addEventListener('DOMContentLoaded', function (create) {
    var h3 = document.getElementById("h3");
    var h4 = document.getElementById("h4");
    var para = document.getElementById("p");
    var result = document.getElementById("resultm");
    var search = document.getElementById("input");
    var list = document.getElementById('list');

    document.getElementById("search-button").addEventListener("click", function (e) {
        sanitize(search.value);
        e.preventDefault();
        fetch('superheroes.php?search=' + search.value)
            .then(response => response.json())
            .then(superhero => {
                if (search.value == "") {
                    displayData(superhero);
                    removeData(superhero);
                }
                else if (superhero != null) {
                    h3.textContent = superhero.alias;
                    h4.textContent = "A.K.A " + superhero.name;
                    para.textContent = superhero.biography;
                    removeData(h3.textContent);
                }
                else {
                    result.textContent = "Superhero Not Found";
                    removeData(result.textContent);
                }
            })

        function displayData(data) {
            data.forEach(function (hero) {
                var item = document.createElement('li');
                item.appendChild(document.createTextNode(hero));
                list.appendChild(item);
            });
        }

        function removeData(data) {
            if (data == h3.textContent) {
                result.textContent = "";
                list.textContent = "";
            }
            else if (data == result.textContent) {
                h3.textContent = "";
                h4.textContent = "";
                para.textContent = "";
                list.textContent = "";
            }
            else {
                result.textContent = "";
                h3.textContent = "";
                h4.textContent = "";
                para.textContent = "";
            }
        }

        function sanitize(string) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                "/": '&#x2F;',
            };
            const reg = /[&<>"'/]/ig;
            return string.replace(reg, (match) => (map[match]));
        }

    })
})






