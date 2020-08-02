let hour=0;
let min=0;
let sec=0;

let disp_hour=0;
let disp_min=0;
let disp_sec=0;

function stopwatch()
 {
     if(sec==ss &&min==mm)
   {
          return;
   }
  
    sec++;

    if(sec==60)
    {
        sec=0;
         min++;
        
        if(min==mm)
        {
            return;
        }

        if(min==60)
        {
            min=00;
            hour++;
        }
    }
   

   
if(sec<10)
{
    disp_sec="0"+sec.toString();
}
else{
    disp_sec=sec;
}
if(min<10)
{
    disp_min="0"+min.toString();
}
else{
    disp_min=min;
}
if(hour<10)
{
    disp_hour="0"+hour.toString();
}
else{
    disp_hour=hour;
}


document.getElementById("display").innerHTML=disp_hour+":"+disp_min+":"+disp_sec;
}

window.setInterval(stopwatch,1000);