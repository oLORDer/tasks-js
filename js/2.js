// Написати програму, яка переведе введену оцінку студента у болонський формат
// 89 – 100 це A,  75 – 88 це В, 60 – 74 це С, 45 – 59 це D,  20 – 44 це Е, до 20 це F

function balonFormat(rating) {
    if(rating < 20) {
        return 'F';
    } else if (rating <= 44) {
        return 'E';
    } else if (rating <= 59) {
        return 'D';
    } else if (rating <= 74) {
        return 'С';
    } else if (rating <= 88) {
        return 'В';
    } else {
        return 'A';
    }
}

console.log(balonFormat(prompt('rating?')));