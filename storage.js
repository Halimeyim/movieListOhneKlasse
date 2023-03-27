//Objekt, um die hinzugefügten Filme zum lokalen Store zu speichern
function Storage() {

}
Storage.prototype.addMovieToStorage = function (newMovie) {
    let films = this.getMoviesFromStorage();
    films.push(newMovie);
    localStorage.setItem("films", JSON.stringify(films));
}
Storage.prototype.getMoviesFromStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
Storage.prototype.deleteMovieFromStorage = function (filmTitle) {
    let films = this.getMoviesFromStorage();
    films.forEach(function (movie, index) {
        if (movie.title === filmTitle) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}
Storage.prototype.clearAllMoviesFromStorage = function () {
    localStorage.removeItem("films");
}