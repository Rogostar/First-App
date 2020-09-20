"use strict";
//Задание №1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?');
// Использование унарного плюса , для преобразования строки в число
//console.log (numberOfFilms);
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
if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB > count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("ПРоизошла ошибка");
}
console.log(personalMovieDB);