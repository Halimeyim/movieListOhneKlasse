//project File ist hauptfile
//Um das Submit-event im Formular abzufangen
const form = document.querySelector("#film-form");
//Um den Text in die Title geschrieben zu bekommen
const titleText = document.querySelector("#title");
//Um den Text in die Director geschrieben zu bekommen
const directorText = document.querySelector("#director");
//Um den Text in die url geschrieben zu bekommen
const urlText = document.querySelector("#url");
//
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
//ein object für UI
const ui = new UI();

//object um im Browser in der Lokale Storage zu speichern
const storage = new Storage();


eventListener();

function eventListener() {
    //Event, um neue Film hinzuzufügen
    form.addEventListener("submit", addMovie);
    //Alle Filme vom Local Storage zu runterladen
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getMoviesFromStorage();
        ui.loadAllMovies(films);
    });
    //film löschen
    cardBody.addEventListener("click", deleteFilm);
    //Alle Filme löschen
    clear.addEventListener("click", deleteAllMovies);

}
function addMovie(e) {
    //um in input geschriebenen Text in einem Variable zu speichern
    const title = titleText.value;
    const director = directorText.value;
    const url = urlText.value;

    if (title === "" || director === "" || url === "") {
        //Wenn alle variblen leer ist dann Fehlerwarnung with Alert
        ui.showAlert("danger", "füllen Sie alle Felder aus");
    }
    else {
        //neue Film in object zu speichern
        const newMovie = new Film(title, director, url);
        //für neue Film Html zu erstellen
        ui.addNewMovieTOUI(newMovie);
        storage.addMovieToStorage(newMovie);
        ui.showAlert("success", "Film erfolgreich hinzugefügt");
    }
    ui.clearInput(titleText.directorText, urlText);
    e.preventDefault();
}
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteMovieFromUI(e.target);
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}
function deleteAllMovies() {
    if (confirm("Sind Sie sicher ?")) {
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
    }
}