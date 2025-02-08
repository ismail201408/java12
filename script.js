
// const arr = [42, 7, 15, 89, 23, 4, 67, 34, 9, 50];

// const arr2 = [...arr].sort((a, b) => a - b);

// console.log("Исходный массив:", arr);
// console.log("Отсортированный массив:", arr2);



// const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", ];


// console.log("Исходный массив:", array);


// function printReversedArray(arr) {
//     const reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     console.log("Обратный порядок:", reversedArray);
// }


// printReversedArray(array);




// 1. Оператор ... (Spread оператор):
// ...arr создает новый массив, содержащий все элементы массива arr.
// Это важно, потому что метод sort сортирует массив на месте, изменяя исходный массив. Использование [...arr] позволяет сохранить оригинальный массив неизменным.
// 2. Метод .sort():
// Метод sort сортирует элементы массива. По умолчанию он сравнивает элементы как строки, что может привести к неожиданным результатам при работе с числами (например, ['10', '2'] → ['10', '2']).
// Для чисел необходимо передать собственную функцию сравнения.
// 3. Функция сравнения (a, b) => a - b:
// a и b — это два элемента массива, которые sort сравнивает.
// Возвращаемое значение определяет порядок элементов:
// Если результат отрицательный (a - b < 0), то a будет перед b.
// Если результат положительный (a - b > 0), то b будет перед a.
// Если результат 0, порядок a и b не изменится.

// let objectphone = {

// }

// let objectcar = new Object({

// }) 

// let objectcomputer = {

// }

// objectphone.marka = "Iphone"
// objectphone.model = "xs"
// objectphone.opS = "ios"
// objectphone.color = "green"
// objectphone.additionalproperty = "Face ID"


// objectcar.marka = "BMW"
// objectcar.model = "M5 F90"
// objectcar.motor = "4.4 Twin turbo S63"
// objectcar.color = "gray with carbons"
// objectcar.hp = "1200"
// objectcar.exhaust = "Acropovich"
// objectcar.year = "2018"

// objectcomputer.brend= "asus"
// objectcomputer.model= "ASUS Vivobook Pro 15 OLED N6506MV-MA082"
// objectcomputer.pn= "90NB12Y3-M004R0"
// objectcomputer.color = "black"
// objectcomputer.ram= "24GB DDR5"

// console.log(objectphone);
// console.log(objectcar);
// console.log(objectcomputer);






// let objectphone = {
// first : "ismail",
// second : "Nadir",
// third : "Mehti"
// }
// console.log(objectphone["third"]);

// let objectcar = new Object({

// }) 

// let objectcomputer = {

// }

// objectphone.marka = prompt("введите марку")
// objectphone.model = prompt("введите модель")
// objectphone.opS = prompt("введите opS")
// objectphone.color = prompt("введите цвет")
// objectphone.additionalproperty = prompt("введите дополнительную функцию")


// objectcar.marka = "BMW"
// objectcar.model = "M5 F90"
// objectcar.motor = "4.4 Twin turbo S63"
// objectcar.color = "gray with carbons"
// objectcar.hp = "1200"
// objectcar.exhaust = "Acropovich"
// objectcar.year = "2018"

// objectcomputer.brend= "asus"
// objectcomputer.model= "ASUS Vivobook Pro 15 OLED N6506MV-MA082"
// objectcomputer.pn= "90NB12Y3-M004R0"
// objectcomputer.color = "black"
// objectcomputer.ram= "24GB DDR5"

// if(objectphone.marka == "iphone" && objectphone.model == "xs" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005005227647690.html?spm=a2g2w.favourites.mywishlist.37.692c4aa6Ca470p&sku_id=12000032271824116" target="_blank">https://aliexpress.ru/item/1005005227647690.html?spm=a2g2w.favourites.mywishlist.37.692c4aa6Ca470p&sku_id=12000032271824116</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "iphone" && objectphone.model == "11" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005002940009793.html?sku_id=12000043387205739&spm=a2g2w.productlist.search_results.10.43d837d7oOjk4E" target="_blank">https://aliexpress.ru/item/1005002940009793.html?sku_id=12000043387205739&spm=a2g2w.productlist.search_results.10.43d837d7oOjk4E</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "iphone" && objectphone.model == "13" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005005265570165.html?sku_id=12000032428934532&spm=a2g2w.productlist.search_results.6.6879476dxM330j" target="_blank">https://aliexpress.ru/item/1005005265570165.html?sku_id=12000032428934532&spm=a2g2w.productlist.search_results.6.6879476dxM330j</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "iphone" && objectphone.model == "12" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005003938775879.html?sku_id=12000042196031867&spm=a2g2w.productlist.search_results.18.154142b1m84bAL" target="_blank">https://aliexpress.ru/item/1005003938775879.html?sku_id=12000042196031867&spm=a2g2w.productlist.search_results.18.154142b1m84bAL</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "iphone" && objectphone.model == "14" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005006194872609.html?sku_id=12000043512508830&spm=a2g2w.productlist.search_results.7.69f629eafD7cwM" target="_blank">https://aliexpress.ru/item/1005006194872609.html?sku_id=12000043512508830&spm=a2g2w.productlist.search_results.7.69f629eafD7cwM</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "iphone" && objectphone.model == "15" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005007538953887.html?sku_id=12000042739711152&spm=a2g2w.productlist.search_results.16.70be5e08eEUe8q" target="_blank">https://aliexpress.ru/item/1005007538953887.html?sku_id=12000042739711152&spm=a2g2w.productlist.search_results.16.70be5e08eEUe8q</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "iphone" && objectphone.model == "16" && objectphone.opS == "ios"  && objectphone.additionalproperty == "faceid"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005007958864113.html?sku_id=12000043253685192&spm=a2g2w.productlist.search_results.7.75a13dd3hf0fG5" target="_blank">https://aliexpress.ru/item/1005007958864113.html?sku_id=12000043253685192&spm=a2g2w.productlist.search_results.7.75a13dd3hf0fG5</a>',
//         icon: 'info'
//     });
    
// }
// if(objectphone.marka == "redmi" && objectphone.model == "11" &&  objectphone.additionalproperty == "128"  ){
//     Swal.fire({
//         title: 'Перейдите по ссылке',
//         html: '<a href="https://aliexpress.ru/item/1005007958864113.html?sku_id=12000043253685192&spm=a2g2w.productlist.search_results.7.75a13dd3hf0fG5" target="_blank">https://aliexpress.ru/item/1005007958864113.html?sku_id=12000043253685192&spm=a2g2w.productlist.search_results.7.75a13dd3hf0fG5</a>',
//         icon: 'info'
//     });
    
// }

//     console.log(objectphone);
//     console.log(objectcar);
//     console.log(objectcomputer);
 

// Созать объект состоящий из 2ух свойств(num1, num2) и 4ех методов(result1, result2, result3, result4). Первый метод вычисляет сумму чисел, второй разность, третий метод произведение и четвертый частное чисел который были заданы как свойство(num1, num2)
// В методах использовать ключевое слово this

// let object = {
// num1 : prompt("введите число"),
// num2 : prompt("введите число"),
// compute: function( ) {
//     this.result = this.num1 + this.num2;
//     this.result1 = this.num1 - this.num2;
//     this.result2 = this.num1 / this.num2;
//     this.result3 = this.num1 * this.num2;
//   }

// }
// object.compute(); //Вычисляем сколько будет 5*5?
// document.write(calc.result); // Выводим результат
// document.write(calc.result1); // Выводим результат
// document.write(calc.result2); // Выводим результат
// document.write(calc.result3); // Выводим результат


// let calc = {
//     num1: +prompt("введите число"),
//     num2: +prompt("введите число"),
//     compute: function( ) {
//       this.result = this.num1 + his.num2;
//     },
//     compute1: function( ) {
//       this.result1 = this.num1 - this.num2;
//     },
//     compute2: function( ) {
//       this.result2 = this.num1 * this.num2;
//     },
//     compute3: function( ) {
//       this.result3 = this.num1 / this.num2;
//     }
//   };
//    calc.compute(); 
//    calc.compute1(); 
//    calc.compute2(); 
//    calc.compute3();  
//   console.log(`сумма ${calc.result}`); 
//   console.log(`разность ${calc.result1}`); 
//   console.log(`произведения ${calc.result2}`); 
//   console.log(`частное ${calc.result3}`);  

// function Car(marka,model,color,exhaust,motor,hp,year) {
//   this.marka = marka 
//   this.model = model
//   this.color = color
//   this.exhaust = exhaust
//   this.motor = motor
//   this.hp = hp
//   this.year = year
// };
// let mycar = new Car("BMW", "M5 F90", "gray", "Acropovich", "V8 Twin Turbo на 4.4 литра", "1200", "2018" );
// let mycar1 = new Car("Mersedes", "представь себе ты молодой пацан и покупаешь banan", "black", "CAPRISTO", "8 с двойным турбонаддувом (Biturbo). Объём: 5.5 литра", "1000", "2016" );
// let mycar2 = new Car("Lada (VAZ)", "Priora", "black", "бог знает что ", " ВАЗ-21126", "98", "2018" );
// console.log( mycar);
// console.log( mycar1);
// console.log( mycar2);




// let objectSelect = {
//  username: prompt("write your Username"),
//  email: prompt("write your Email"),
//  password: prompt("write your Password")
// }

// console.log(objectSelect);




// function objectSelect(username,email,password) {
//   this.username = username 
//   this.email = email
//   this.password = password
// }
// let mycar = new objectSelect(prompt("write your Username"), prompt("write your Email"), prompt("write your password") )
// console.log( mycar);




// function Car(marka,model,color,motor,hp,memory,screen) {
//   this.marka = marka,
//   this.model = model,
//   this.color = color,
//   this.motor = motor,
//   this.hp = hp
//   this.memory = memory
//   this.screen = screen
  
// };
// let mycar = new Car("BMW", "M5 F90", "gray", "V8 Twin Turbo на 4.4 литра", "1200", delete Car.memory, delete Car.screen );
// let mycar1 = new Car("256", "Oled", delete Car.marka, delete Car.model,delete Car.color,delete Car.motor,delete Car.hp );


// let objectcars = {
//     bmw: "bmw",
//     mersedes: "mersedes",
// }
// let bmw = {
//     marka : "BMW",
//     model : "M5 F90",
//     motor : "4.4 Twin turbo S63",
//     color : "gray with carbons",
//     hp : "1200",
//     exhaust : "Acropovich",
//     year : "2018",
// }
// let mersedes = {
//     marka : "mersedes",
//     model : "Cls 63 Amg",
//     motor : "8 с двойным турбонаддувом (Biturbo). Объём: 5.5 литра",
//     color : "black",
//     hp : "1000",
//     exhaust : "CAPRISTO",
//     year : "2013",
// }


// let a = prompt("введите Мерседес или Бмв")
// if(a =="bmw"){
//     console.log(bmw);
// } else{
//     console.log(mersedes);   
// }


//     < class="form-container">
//         <form class="sign-up-form">
//             <h2>Sign Up</h2>
//             <div class="input-group">
//                 <input type="text" placeholder="Enter your Name" required>
//             </div>
//             <div class="input-group">
//                 <input type="tel" placeholder="Enter your Phone no" required>
//             </div>
//             <div class="input-group">
//                 <input type="email" placeholder="Enter your Email" required>
//             </div>
//             <div class="input-group">
//                 <input type="password" placeholder="Enter your Password" required>
//             </div>
//             <div class="input-group">
//                 <input type="password" placeholder="Confirm Password" required>
//             </div>
//             <button type="submit" class="register-button">REGISTER</button>
//             <p class="signin-text">Have an Account? <a href="#">Sign in</a></p>
//         </form>



// 

// let p1 = document.getElementById("p1").innerHTML = "Hello World"


// let p2 = document.getElementById("p2").innerHTML = "Hello World"


// let p3 = document.getElementById("p3").innerHTML = "Hello World"


// let p4 = document.getElementById("p4").innerHTML = "Hello World"


// let p5 = document.getElementById("p5").innerHTML = "Hello World"


// let p6 = document.getElementById("p6").innerHTML = "Hello World"

// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)
// console.log(p5)
// console.log(p6)







// let pq = prompt("Введите значения")
// let pw = prompt("Введите значения")
// let pe = prompt("Введите значения")
// let pr = prompt("Введите значения")
// let pt = prompt("Введите значения")


// let p1 = document.getElementById("a").innerHTML = pq


// let p2 = document.getElementById("b").innerHTML = pw


// let p3 = document.getElementById("c").innerHTML = pe


// let p4 = document.getElementById("d").innerHTML = pr


// let p5 = document.getElementById("e").innerHTML = pt
 
// let i = 0

// while(i<5){
// let qw = prompt("Введите значения");
// let p1 = document.getElementsByClassName("a")[i].innerHTML = qw;
// i++;
// }



// function compareStringLengths(string1, string2) {
//     // return string1.length === string2.length;
//     if( string1.length === string2.length){
//         const result = compareStringLengths(true);
//     }else{
//         const result = compareStringLengths(false);
//     }
// }
 
// // const result = compareStringLengths(true, true);
// console.log(compareStringLengths); 


// function compareStringLengths(str1, str2) {
//     return str1.length === str2.length;
// }


// console.log(compareStringLengths("hello", "world")); 
// console.log(compareStringLengths("hello", "JavaScript")); 



// function compareStringLengths(string1, string2) {
//     return string1.length === string2.length;
// }


// const result = compareStringLengths("Привет", "Мир!");
// console.log(result); 

// function finc1(a,b) {
//     for(let i=a; i<=b; i++){
//            console.log(i);
           
//     }
// }

// finc1(prompt("Введите от какого числа цикл будет идти"),prompt("Введите от какого числа цикл будет идти"))



// let rows = 8;

// for (let i = 1; i <= rows; i++) {
//     console.log("*".repeat(i));
// }

// let div  = document.createElement("div")
// document.body.append(div)
// document.getElementsByTagName("div")[0].style.height = "200px"
// document.getElementsByTagName("div")[0].style.width = "200px"
// document.getElementsByTagName("div")[0].style.backgroundColor = "green"
// document.getElementsByTagName("div")[0].style.border = "red solid 10px"
// let div1  = document.createElement("div")
// document.body.append(div1)
// document.getElementsByTagName("div")[1].style.height = "200px"
// document.getElementsByTagName("div")[1].style.width = "200px"
// document.getElementsByTagName("div")[1].style.backgroundColor = "blue"
// document.getElementsByTagName("div")[1].style.border = " green solid 16px"
// document.getElementsByTagName("div")[1].style.marginTop = " 20px"
// let div2  = document.createElement("div")
// document.body.append(div2)
// document.getElementsByTagName("div")[2].style.height = "200px"
// document.getElementsByTagName("div")[2].style.width = "200px"
// document.getElementsByTagName("div")[2].style.backgroundColor = "red"
// document.getElementsByTagName("div")[2].style.border = "black solid 16px"
// document.getElementsByTagName("div")[2].style.marginTop = " -479px"
// document.getElementsByTagName("div")[2].style.marginLeft = " 320px"



// document.getElementsByTagName("div")[0].style.height = "200px"
// document.getElementsByTagName("div")[0].style.width = "200px"
// document.getElementsByTagName("div")[0].style.backgroundColor = "blue"

// let div2  = document.createElement("img")
// document.body.append(div2)

// function myfunc() {
//     document.getElementsByTagName("div")[0].style.backgroundColor = "black"
// }


// function myfunc() {
//     document.getElementsByTagName("img")[0].src = "https://media.licdn.com/dms/image/v2/D4E22AQFHoFXC6YF-Pg/feedshare-shrink_800/feedshare-shrink_800/0/1703783953879?e=2147483647&v=beta&t=dRSxc8IGv3A_euboljYnoz2Tll35NhQNSPQWQADh2qQ"
// }


// function myfunc1() {
//     document.getElementsByTagName("div")[0].style.backgroundColor = "green"
// }
// function myfunc2() {
//     document.getElementsByClassName("a")[0].style.display = "none"
//     // el.remove()
// }


// function changeImage() {
//     const img = document.getElementById('dynamicImage');
//     const currentSrc = img.src;

  
//     if (currentSrc.includes('https://cool.klev.club/uploads/posts/2024-05/cool-klev-club-zmyw-p-prikolnie-kartinki-so-smislom-na-avu-dlya-9.jpg')) {
//         img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIR76RNTGxnGtwK3izh4VK6ztMLmVklEe5w&s';
//     } else if (currentSrc.includes('image1.jpg')) {
//         img.src = 'https://sun9-67.userapi.com/s/v1/ig2/nkKDMePRBsKZkVip-jpznTdwpuJMKOtyNGzU0F_5aKQ6B0W3g0tnKozBte4G9q-4-MSa3d1Qzks3l6jNBK7A76dJ.jpg?quality=95&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,1024x1280&from=bu&u=rsdsEPfnCMiZgdGsWyYlnhrnpCNMl5_8FD3kVnJzrGg&cs=646x807';
//     } else {
//         img.src = 'https://sun9-67.userapi.com/s/v1/ig2/nkKDMePRBsKZkVip-jpznTdwpuJMKOtyNGzU0F_5aKQ6B0W3g0tnKozBte4G9q-4-MSa3d1Qzks3l6jNBK7A76dJ.jpg?quality=95&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,1024x1280&from=bu&u=rsdsEPfnCMiZgdGsWyYlnhrnpCNMl5_8FD3kVnJzrGg&cs=646x807';
//     }
// }
// let img = document.createElement("img")
// let a = document.getElementsByTagName("select")[0];
// function func1() {
//     if (a.value == "Mersedes") {
//         img.src = "https://i.pinimg.com/originals/95/03/c9/9503c966ba5eff6b0424342c8bc337c7.jpg"
//     }
//     if (a.value == "Bmw") {
//         img.src = "https://a.d-cd.net/sBlb2mMmltjRBZ737HxUyiZluxo-1920.jpg"
//     }
//     if (a.value == "Audi") {
//         img.src = "https://hips.hearstapps.com/hmg-prod/images/audi-rs5-competition-package-11-1652285182.jpg?crop=0.683xw:0.765xh;0.192xw,0.149xh&resize=768:*"
//     }
// }
// document.body.append(img)
// let a = document.createElement("div");
// function func() {
//    a.style.width = "200px";
//    a.style.height = "200px";
//    a.style.backgroundColor = "green";
//    a.style.transition = "1s";
// }
// function func1() {
//    a.style.width = "200px";
//    a.style.height = "200px";
//    a.style.backgroundColor = "red";
//    a.style.transition = "1s";

// }
// function func2() {
//    a.style.width = "200px";
//    a.style.height = "200px";
//    a.style.transition = "1s";
//    a.style.backgroundColor = "black";
// }
// document.body.append(a)



// function myFunction() {
//   document.getElementById("demo").textContent = "I have changed!";
// }

// function func() {
//    let a = document.createElement("div");
//    a.style.width = "200px";
//    a.style.height = "200px";
//    a.style.backgroundColor = "red";
// }
// document.body.append(a);



// let a = document.getElementById("a")

// a.addEventListener("click",func)
// function func() {
//   let v = document.createElement("div")
//   v.innerHTML = "you create element"
//   document.body.append(v)
// }
// v.addEventListener("click",func1)
// function func1() {
//   v.remove();
// }

// второе задание

// let a = document.getElementById("a");

// a.addEventListener("click", () => {
//     let newdiv = document.createElement("div");
//     newdiv.innerHTML = "You create new element";
//    newdiv.style.width = "100px";
//    newdiv.style.height = "100px";
//    newdiv.style.backgroundColor = "red";
//    newdiv.style.marginTop = "40px";
//    newdiv.style.color = "white";
//    newdiv.style.fontSize = "19px";
//    newdiv.style.padding = "50px";

//     document.body.append(newdiv);
//     newdiv.addEventListener("click", function () {
//         newdiv.remove();
//     });
// });

// третье задание 

// function close1() {
//   window.close()
// }
// function open1() {
//   let newwindow = window.open()
//   let a  = document.createElement("p")
//   a.innerHTML = "Welcome to a new page"
//   newwindow.document.body.append(a)
// }
let div = document.getElementById("modalW")
function func1() {
  div.style.display = "flex"
  document.body.style.overflowY = "hidden"
}
function func2() {
  div.style.display = "none"
  document.body.style.overflowY = "scroll"
}