function Fibonacci (i) {
    if (i==1||i==2){
        return 1;
    }

    return Fibonacci (i-1)+ Fibonacci (i-2);   
}

function task3 () {
var i = Number(prompt('Введите необходимое число Фибоначчи'));
if (Number.isNaN(i) || i<1){
    alert('Неверные данные!');
}
else {
    alert(i+'-ое число Фибоначчи: '+Fibonacci (i));
}
return 0;
}
