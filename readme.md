# <span style="color: yellow; font-size: 60px; margin-left: 25%"> **JavaScipt lecture 5**<span>
<span style="color: rgb(110, 241, 204); font-size: 40px"> **1. Object** <span>

<span style="color: rgb(128, 110, 24); font-size: 40px"> **2. Destructuring** <span>

<span style="color: rgb(110, 180, 204); font-size: 40px"> **3. Spread** <span>

<span style="color: rgb(110, 141, 2); font-size: 40px"> **4. This** <span>

<span style="color: rgb(20, 230, 255); font-size: 40px"> **5. New Date()** <span>


<br> <br> <br>
<br> <br> <br>
# <span style="color: rgb(110, 241, 204); font-size: 40px"> **1. Object** <span>

<span style="font-size: 30px"> **Что такое `Object` в `JavaScipt` ?** <span> 

<span style="font-size: 24px"> **`Object`  — это набор свойств. Каждое свойство состоит из названия и значения. Название может быть строкой или символом, а значение может быть любым. Объекты в JavaScript используются повсюду, особенно для хранения данных** <span> 
<br> <br>
<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

```javascript

let car = { // object name 
    name: "Range", // properties 
    color:"Black",
    age: 2014,
   // key name: name, color, age and camera 
    camera: function () 
    {
        return car.name
    }
}
console.log(car ["color"]); // array 
console.log(car.age);
console.log(car.camera());
```

<br> <br>

# <span style="font-size: 48px"> **Methods Object:** <span> 

<span style="font-size: 20px"> **1. `Object.entries()` - метод возвращает массив собственных перечисляемых свойств указанного объекта в формате `[key, value]` , в том же порядке, что и в цикле `for...in` (разница в том, что `for-in ` перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.** <span> 

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

```javascript

let obj = {name: "Adam", age: 20,};
console.log(Object.entries(obj)); // [ [ 'name', 'Adam' ], [ 'age', 20 ] ]

```

<br> <br>
<span style="font-size: 20px"> **2. `Object.keys()` - возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте. Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл.** <span> 

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

```javascript

let obj = {name: "Adam", age: 20,};
console.log(Object.keys(obj)); // [ 'name', 'age' ]

```
<br> <br>
<span style="font-size: 20px"> **3. `Object.values()` - возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in . Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.** <span> 

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

```javascript

let obj = {name: "Adam", age: 20,};
console.log(Object.values(obj)); // [ 'Adam', 20 ]

```

<br><br><br>

<span style="color: rgb(128, 110, 24); font-size: 40px"> **2. Destructuring and Spread** <span>

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

```javascript 


 // destructuring 1

let car = { // object name 
    name: "Range", // properties 
    color: "black",
    age: 2014,
}

let {color} = car
console.log(color);


 // destructuring 2
 
let car = { // object name 
    name: "Range", // properties 
    color:
    {
        black: "Black"
    },
    age: 2014,
}

let {black} = car.color
console.log(black); 

 // destructuring 3

 
let car = { // object name 
    name: "Range", // properties 
    color:
    {
        black: "Black"
    },
    age: 2014,
}

let {color:{black}} = car
console.log(black); 


// destructuring 4

let car = { // object name 
    name: "Range", // properties 
    color:
    {
        black: "Black"
    },
    age: 2014,
}

let {color:{black:bye}} = car
console.log(bye); 

```

<br><br><br>

<span style="color: rgb(110, 141, 2); font-size: 40px"> **4. This** <span>


<span style="font-size: 20px"> **`this` — это ключевое слово в JavaScript которое содержит в себе объект (контекст) выполняемого кода. Мне кажется, что проще всего представить, что `this` — это уникальная переменная, которая хранит в себе контекст исполняемого кода. И наоборот — контекст — это значение ключевого слова `this`.** <span> 

```javascript
console.log(this);

// в консоль выводится объект Window
// Window { postMessage: ƒ, 
// blur: ƒ, 
// focus: ƒ, 
// close: ƒ, 
// frames: Window, …}

function myFunction() {
  console.log(this);
}

// Вызовем функцию
myFunction(); 

// функция выводит тот же объект Window! 
// Window { postMessage: ƒ, 
// blur: ƒ, 
// focus: ƒ, 
// close: ƒ, 
// frames: Window, …}

```

<span style="color: rgb(20, 230, 255); font-size: 40px"> **5. New Date()** <span>


<span style="font-size: 20px"> **`new Date(значение)` создаёт Date с переданным значением времени. Значение должно быть в формате, который распознается методом Date. parse() , то есть быть совместимым с IETF RFC 2822 или с ISO8601. new Date(год, месяц, день, часы, минуты, секунды, миллисекунды) создаёт класс Date в местной часовой зоне.** <span> 


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

``````javascript

const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
// Expected output: 0

``````