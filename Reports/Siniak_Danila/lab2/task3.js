function task3() {
    function Check(num) {
        if (Number.parseFloat(num)) {
            return num;
        }
        else return 0
    }

    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    choice = 1
    while (choice == 1) {
        var number = prompt("Номер числа Фибоначчи: ");

        if (ToInt(number) && number >= 0)
            alert(fib(number));
        else
            alert("Ошибка ввода");
        var choice = prompt("выход - 0 \nпродолжить - 1 ");
    }
}