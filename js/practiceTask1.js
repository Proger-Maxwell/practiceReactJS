/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект 1 и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/* 
let numberOfFilms = +prompt(`How much films did you watch?`,``);
console.log(numberOfFilms);*/

/* 
let clearObj = null;
let arr = [];
let bool = false;
let privat;

let obj = {
    countFilms: ``,
    movies: ``,
    actors: ``,
    genres: ``,
    privat: ``,
};
obj.countFilms = numberOfFilms;
obj.movies = clearObj;
obj.actors = clearObj;
obj.genres = arr;
obj.privat = bool;

console.log(obj.countFilms);
console.log(obj.movies);
console.log(obj.actors);
console.log(obj.genres);
console.log(obj.privat);
*/


let movie1 = prompt(`Один из последних просмотренных фильмов?`,``);
let mark1 = +prompt(`На сколько оцените его?`,``);

let movie2 = prompt(`Один из последних просмотренных фильмов?`,``);
let mark2 = +prompt(`На сколько оцените его?`,``);

let movies = {
    [movie1]: mark1,
    [movie2]: mark2,
};


console.log(movies);