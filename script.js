

//Задание №1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?' );
// Использование унарного плюса , для преобразования строки в число
console.log (numberOfFilms);
//Задание №2 
const personalMovieDB = {
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    private: false
};
console.log(personalMovieDB.count);
console.log(personalMovieDB.private);
//Задание №3
const a = prompt('Один из последних просмотренных фильмов ?', ' '),
      b = prompt('На сколько оцените его ?', ' '),
      c = prompt('Один из последних просмотренных фильмов ?', ' '),
      d = prompt('На сколько оцените его ?', ' ');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);