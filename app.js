document.addEventListener('DOMContentLoaded', function (create) {
    document.getElementById("search-button").addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "superheroes.php", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = xhr.responseText;
                    alert(response);
                    var result;
                    /*for (var i = 0; i < response.length; i++) {
                        var superhero = response[i];
                        result = superhero[0];
                    }
                    alert(result);*/
                } else {
                    alert("Error fetching superheroes");
                }
            }
        };
        xhr.send();
    })
})




