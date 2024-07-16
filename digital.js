let initialsecond=0,initialminute=0,initalhour=0;
let setinterval
function start(){
  setinterval= setInterval(() => {
       initialsecond=initialsecond+1;
       if(initialsecond>59){
           initialsecond=0
           initialminute+=1
           if(initialminute==60){
               initialminute=0;
               initalhour+=1; 
            }
        }
        document.getElementsByClassName("second")[0].innerHTML=initialsecond
        document.getElementsByClassName("minute")[0].innerHTML=initialminute
         document.getElementsByClassName("hour")[0].innerHTML=initalhour
    
   }, 1000);
}
function stop(){
    clearInterval(setinterval)
}
function reset(){
        initialsecond=0,initialminute=0,initalhour=0
        document.getElementsByClassName("second")[0].innerHTML=initialsecond
        document.getElementsByClassName("minute")[0].innerHTML=initialminute
         document.getElementsByClassName("hour")[0].innerHTML=initalhour
         stop()
}