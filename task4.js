/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.*/

function setNumbers(from,to){
    let current = from
    let timerId = setInterval(()=>{
        console.log(current)
        if (current === to){
            clearInterval(timerId)
        }
        current++
    },1000)
   
}
setNumbers(8,15)
