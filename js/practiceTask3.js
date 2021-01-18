'use strict';
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start(){
    
    while(numberOfFilms ==`` || numberOfFilms == null || isNaN(numberOfFilms)){

        numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`,``);
    }

}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//console.log(personalMovieDB);
function rememberMyFilms(){
    for (let i = 1;  i <= numberOfFilms; i++) {
        let movie = prompt(`Один из последних просмотренных фильмов?`,``),
            mark = +prompt(`На сколько оцените его?`,``);
    
            if(movie != null && mark != null && movie != `` && mark != `` && movie.length < 50){
                personalMovieDB.movies[movie]=mark;
                alert(`done`);
            } else {
                i--;
                alert(`error`);
            }
           
    }
}
//rememberMyFilms();

function detectPersonalLevel(){

    if (personalMovieDB.count < 10){
        alert(`Просмотрено довольно мало фильмов`);
    }else if(personalMovieDB.count > 10 < 30){
        alert(`Вы классический зритель`);
    }else if(personalMovieDB.count >30){
        alert(`Вы киноман`);
    }else{
        alert(`Произошла ошибка`);
    }

}
//detectPersonalLevel();

function showMyDB(hidden){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();


let genre;

function writeYouGenres(){

    for(let i=1; i<=3; i++){
        
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`,``);
        
    }

}
writeYouGenres();