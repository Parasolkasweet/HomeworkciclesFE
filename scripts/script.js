// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// let numbersDiv = document.querySelector(`.numbers`);
// for (let i = 100-1; i >= 50; i -=10) {
//     let paragraph = document.createElement(`p`);
//     paragraph.textContent = i;
//     numbersDiv.appendChild(paragraph);
//    
// }

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные. Например ["Hi", "pretty". "mamma mia", "Kovbasa"]



let arr = ["Hi", "pretty", "mamma mia", "Kovbasa"];
let stringsConteinerDiv = document.querySelector(`.strings_container`);
for (let i = 0; i < arr.length - 1; i ++) {
    let paragraph = document.createElement(`p`);
    paragraph.textContent = arr[i];
    stringsConteinerDiv.appendChild(paragraph);
    
}