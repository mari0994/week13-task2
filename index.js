const INPUT = document.getElementById('birthday');
const BUTTON = document.querySelector('.calculate');
const COMMENT = document.querySelector('.comment');

function calculateDaysUntilBirthday (){
    if(INPUT.value === ''){
        COMMENT.innerText = 'Введите дату';
        COMMENT.style.color = 'red';
    } else {
        const birthdayDate = INPUT.value;
        const timeDifference = Date.parse(birthdayDate) - Date.now();
        const daysUntil = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        COMMENT.style.color = 'black';

        if (daysUntil % 100 === 11 || daysUntil % 100 === 12 || daysUntil % 100 === 13 || daysUntil % 100 === 14) {
            COMMENT.innerText = `До вашего дня рождения осталось ${daysUntil} дней.`;
        }
        else if (daysUntil % 10 === 1){
            COMMENT.innerText = `До вашего дня рождения остался ${daysUntil} день.`;
        } else if (daysUntil % 10 === 2 || daysUntil % 10 === 3 || daysUntil % 10 === 4){
            COMMENT.innerText = `До вашего дня рождения осталось ${daysUntil} дня.`;
        } else if(daysUntil<=-1) {
            COMMENT.textContent = `Ваш день рождения уже прошел.`
        } else if(daysUntil ===0){
            COMMENT.textContent = `Ваш день рождения сегодня.`
        } else {
            COMMENT.innerText = `До вашего дня рождения осталось ${daysUntil} дней.`;
        }
    }
}


// Оптимизированный вариант !

// function calculateDaysUntilBirthday (){
//     if(INPUT.value === ''){
//         COMMENT.innerText = 'Введите дату';
//         COMMENT.style.color = 'red';
//     } else {
//         const birthdayDate = INPUT.value;
//         const timeDifference = Date.parse(birthdayDate) - Date.now();
//         const daysUntil = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//         COMMENT.style.color = 'black';

//         const lastDigit = daysUntil % 10;
//         const lastTwoDigits = daysUntil % 100;
//         if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
//             COMMENT.innerText = `До вашего дня рождения осталось ${daysUntil} дней.`;
//         }
//         else if (lastDigit === 1){
//             COMMENT.innerText = `До вашего дня рождения остался ${daysUntil} день.`;
//         } else if (lastDigit >=2 && lastDigit <= 4){
//             COMMENT.innerText = `До вашего дня рождения осталось ${daysUntil} дня.`;
//         } else if(daysUntil<=-1) {
//             COMMENT.textContent = `Ваш день рождения уже прошел.`
//         } else if(daysUntil ===0){
//             COMMENT.textContent = `Ваш день рождения сегодня.`
//         } else {
//             COMMENT.innerText = `До вашего дня рождения осталось ${daysUntil} дней.`;
//         }
//     }
// }

BUTTON.addEventListener('click', calculateDaysUntilBirthday);
