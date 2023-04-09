function changemode(){
    let mybody=document.querySelector('body')
    mybody.classList.toggle('mydark')
}

function loadcoupon(){
    document.getElementsByClassName('coupon')[0].style.display="block";
    document.getElementsByClassName('a_main1')[0].style.opacity="0.8";
}

function closecoupon(){
    document.getElementsByClassName('coupon')[0].style.display="none";
    document.getElementsByClassName('a_main1')[0].style.opacity="1";
}


//weather
let x = document.getElementById('out');
let y = document.getElementById('weather');
function geolocation(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
}
else{
    x.innerText = "geo not supported";
}
}

function showPosition(data){
console.log(data)
let lat = data.coords.latitude;
let long = data.coords.longitude;
// x.innerText = `latitude ${lat}`;//
const url = `https://api.openweathermap.org/data/2.5/forecast/daily/?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

//api calling//
fetch(url,{method:'GET'})
//RETURN promise//
.then((res) =>res.json())
//return data//
.then((data) => {
console.log(data)
let cityname = data.city.name;
let temp = data.list[0].temp.day;
y.innerText = `temp of ${cityname} is ${temp} degree celcius`;
})
}  



/*
var swiper = new Swiper(".a_main2-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
       delay:500,
       disableOnInteraction: false,
    },
   breakpoints: {
     0: {
       slidesPerView: 3,
     },
     768: {
       slidesPerView: 4,
     },
     1024: {
       slidesPerView: 5,
     },
   },
  });*/


