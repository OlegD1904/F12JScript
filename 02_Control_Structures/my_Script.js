/**
 * Урок номер 2 - основы  JavaScript условные конструкции
 * [Уроки JS]{@link https://jsdoc.app/tags-inline-link.html}
 * @author Oleg Dundev <dundev1904@gmail.com>
 */
// Запоминаем возраст пользователя
// let age = 45
// console.log(age)
// age = age + 5
// console.log(age)

let dog1 = {
    age: 8,
    name: "Арчи",
    img: 'https://wildfrontier.ru/wp-content/uploads/2015/07/SHarpej.jpg'

}
let dog2 = {
    age: 12,
    name: "Кора",
    img: 'https://tvoidrug.com/wp-content/uploads/2016/09/foto_224_1_600-1.jpg'
}
let dogs = [dog1, dog2]
let main = document.getElementById("main")
let ul = document.createElement('ul')
dogs.map(dog => {
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.src = dog.img
    li.appendChild(img)
    let span = document.createElement('span')
    span.innerText = dog.name
    li.appendChild(span)
    ul.appendChild(li)
})
main.appendChild(ul)
