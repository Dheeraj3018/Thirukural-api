//https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7


async function thirukural(){
    let content=document.getElementById("content");
    let num=document.getElementById("val");
    if (num.value > 0 && num.value <= 1330) {
        let data = await (
          await fetch(`https://api-thirukkural.vercel.app/api?num=${num.value}`)
        ).json();
    console.log(res);
        }

    var thirukural=document.getElementById('thirukural');
    content.innerHTML=`<div class="card" style="width: 18rem;">
    <img src=" https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text"> Temperature:${data.chapgrp_tam}</p>
      
      <p class="card-text"> humidity:${data.sect_tam}</p>
      
    </div>
  </div>`
}.
