//object für User Interface zu erstellen
//enthält nur Methoden keine Attribute
function UI() {

}
UI.prototype.addNewMovieTOUI = function (newMovie) {
    //     <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr>
    //Zuweisen des Parentelements zu einer Variablen, um die HTML-Codes hinzuzufügen
    const filmList = document.getElementById("films");
    filmList.innerHTML += `<tr>
    <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
    <td>${newMovie.title}</td>
    <td>${newMovie.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Löschen</a></td>
  </tr> `;
}
UI.prototype.showAlert = function (type, message) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1000)

}
UI.prototype.loadAllMovies = function (films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
        filmList.innerHTML += `<tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail" width="100"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Löschen</a></td>
          </tr> `;
    });
}
UI.prototype.clearInput = function (input1, input2, input3) {
    input1.value = "";
    input2.value = "";
    input3.value = "";
}
UI.prototype.deleteMovieFromUI = function (element) {
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllMoviesFromUI = function () {
    const filmList = document.getElementById("films");
    //filmList.innerHTML =""; --> bu bir yolu
    while (filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }

}
