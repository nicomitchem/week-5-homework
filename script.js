

var hour=document.getElementById('hours'); // 0 - 23
var minute=document.getElementById('minutes'); // 0 - 59
var second=document.getElementById('seconds'); // 0 - 59
var ampm=document.getElementById('am_pm');
 
function getCurrentTime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM";
    let moon = document.getElementsByClassName('moon')[0];
    let sun = document. getElementsByClassName('sun')[0];

    //console.log(h > 7 && h < 19, "white");
    //console.log(h > 19 && h < 7, "black");

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
     
    if (h > 7 && h < 19) {
        sun.style.display = "block";
      } else {
        moon.style.display = "block";
      }

    if(h<10) h='0'+h;
    if(m<10) m='0'+m;
    if(s<10) s='0'+s;
     
    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    ampm.innerHTML=session;
}
setInterval('getCurrentTime()',1000);



