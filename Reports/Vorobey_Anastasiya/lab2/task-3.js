    let button = document.querySelector('.button');
    let fib = (n) => {
      let a = 0, b = 1;
      if (n == 0) {
            alert("0, но программа считает числа с единицы. То есть при вводе 1 вновь будет выведен 0.")
            ExtensionScriptApis;
      }
      if (n == 1) { //подсчет с 0
        b = 0;
      } else {
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
    }
      return b;
    };

    let call = () => {
      let n = prompt("Введите число");
      alert(`Число Фибоначчи:  ${fib(n)}`);
    };
  
    button.addEventListener('click', call); //при нажатии на кнопку вылазит окошко (вызывается функция кол)