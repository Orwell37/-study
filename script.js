'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for ( let i = 0; i < 2; i++ ) {

    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = +prompt("На сколько оцените его?", "");

        if ( a != null && a != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
        } else {
            alert("Надо ввести название фильма!");
            i--;
        }  
}



console.log(personalMovieDB);

if ( personalMovieDB.count < 10 ) {
    alert("Довольно мало ты смотришь");
}
else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    alert("Классический зритель");
}
else if ( personalMovieDB.count > 30 ) {
    alert("Киноман");
} else {
    alert("произошла ошибка");
}



