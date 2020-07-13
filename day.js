var today=new Date();
var day=today.getDay();
var day1=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.write("Today is : "+day1[day]+".");
document.write("<br/>");
var hour=today.getHours();
var min=today.getMinutes();
 var sec=today.getSeconds();
 var ap=(hour>=12) ? " PM " :" AM " ;
 hour=(hour>=12) ? hour-12 : hour;
 if(hour==0 && ap ==' PM ')
 {
     if(min==0 && sec==0)
     {
         hour=12;
         ap=' Noon';
     }
     else{
         hour=12;
         ap=' PM';
     }
 }
 if(hour==0 && ap==' AM ')
 {
     if(min==0 && sec==0)
     {
         hour=12;
         ap=' Midnight';
     }
     else{
         hour=12;
         ap=' AM';
     }
 } 
 document.write("\tCurrent Time is : "+hour+ap+" : "+min+" : "+sec);