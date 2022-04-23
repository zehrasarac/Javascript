let name = prompt("İsminizi Girin:")
let printName = name;


let myName = document.querySelector('#myName');
let myClock = document.querySelector('#myClock');


function showTime() {
    let d = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = document.querySelector('#myClock')

time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay() ]}`//saat ve gün için
setTimeout(showTime, 1000); 
}
showTime();

myName.innerHTML = `${printName}` //isim çıktısı için

