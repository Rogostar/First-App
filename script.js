"use strict";
//Задание №1
let numberOfFilms;
// Использование унарного плюса , для преобразования строки в число
//console.log (numberOfFilms);
//Задание №2 

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?');
    }
}
//start();

const personalMovieDB = {
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    private: true
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов ?', ''),
            b = prompt('На сколько оцените его ?', '');
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }

    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

/*function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const a = +prompt('Ваш любимый жанр под номером ?');
        if (a != null || a != "") {
            personalMovieDB.genres.push(a);
            console.log(personalMovieDB.genres);
        } else {
            console.log('error');
            --i;
        }

    }
}*/

//Ответ препода 

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();






//writeYourGenres();
//console.log(personalMovieDB);

//Задание №3
//const a = prompt('Один из последних просмотренных фильмов ?', ' '),
//b = prompt('На сколько оцените его ?', ' '),
//c = prompt('Один из последних просмотренных фильмов ?', ' '),
//d = prompt('На сколько оцените его ?', ' ');
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;
//console.log(personalMovieDB);

//Практическое задание №2

//Задание №1

/*let i = 0;

for (let i = 0; i < 2; i++){
    let a = prompt('Один из последних просмотренных фильмов ?', ''),
          b = prompt('На сколько оцените его ?', '');

    if (a === null || b === null){
        console.log('Попал');
        console.log(i);
        i--;
        continue;
    }else if (a.length === 0 || b.length === 0){
        console.log('Попал 3');
        console.log(i);
        i--;
        continue;
    }else if (a.length > 5 || b.length > 5){
        console.log('Попал 2');
        console.log(i);
        i--;
        continue;
    }
    personalMovieDB.movies[a] = b; 
}




do {
    let a = prompt('Один из последних просмотренных фильмов ?', ''),
          b = prompt('На сколько оцените его ?', '');
          if (a === null || b === null){
                  console.log('Попал');
                  console.log(i);
                  continue;
        }else if (a.length === 0 || b.length === 0){
                  console.log('Попал 3');
                  console.log(i);
                  continue;
        }else if (a.length > 5 || b.length > 5){
                  console.log('Попал 2');
                  console.log(i);
                  continue;
        }
        personalMovieDB.movies[a] = b;      
        i++;
        console.log(i);
}
while(i < 2);

while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов ?', ''),
          b = prompt('На сколько оцените его ?', '');
        if (a === null || b === null){
            const a = prompt('Один из последних просмотренных фильмов ?', ''),
                  b = prompt('На сколько оцените его ?', '');
                  console.log('Попал');
                  console.log(i);
                  continue;
        }else if (a.length === 0 || b.length === 0){
            const a = prompt('Один из последних просмотренных фильмов ?', ''),
                  b = prompt('На сколько оцените его ?', '');
                  console.log('Попал 3');
                  console.log(i);
                  continue;
        }else if (a.length > 5 || b.length > 5){
            const a = prompt('Один из последних просмотренных фильмов ?', ''),
                  b = prompt('На сколько оцените его ?', '');
                  console.log('Попал 2');
                  console.log(i);
                  continue;
        }         
    personalMovieDB.movies[a] = b;      
    i++;
    console.log(i);
}
console.log(personalMovieDB);
*/
/*if (personalMovieDB.count < 10 ) {

    console.log('Просмотрено мало фильмов');

}else if ( 10 < personalMovieDB.count && personalMovieDB.count < 30){

    console.log('Вы классический зритель!');

}else if (personalMovieDB.count > 30) {

    console.log('Вы киноман !');

}else {
    console.log('Произошла ошибка');
}*/
// ОТВЕТ ОТ ПРЕПОДА