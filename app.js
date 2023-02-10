let display= document.querySelector('#display');
let btnnumbers=document.querySelectorAll('.btn-number');
let btnclear=document.querySelector('#btn-clear');
let btnclearlastaction=document.querySelector('#btn-cleare-last-action');
let btnbackspace=document.querySelector('#btn-back');
let btndiv=document.querySelector('#btn-div');
let btnmul=document.querySelector('#btn-multi');
let btnmaines=document.querySelector('#btn-maines');
let btnplus=document.querySelector('#btn-plus');
let btnpn=document.querySelector('#btn-pn');
let btnpoint=document.querySelector('#btn-point');
let btnequal=document.querySelector('#btn-equal');
let setpoint;
let number1,number2,result;
let op="";

btnplus.addEventListener('click',(e)=>{
     number1 =Number(display.textContent) 
    display.textContent='0.0'
    op="+";
})
btnmaines.addEventListener('click',(e)=>{
    number1=Number(display.textContent)
    display.textContent="0.0"
    op="-"
})
btnmul.addEventListener("click",(e)=>{
    number1=Number(display.textContent)
    display.textContent='0.0'
    op="*"
})
btndiv.addEventListener("click",(e)=>{
    number1=Number(display.textContent)
    display.textContent="0.0"
    op="/"
})
btnequal.addEventListener('click',(e)=>{
   number2=Number(display.textContent); 
   switch(op){
       
       case"+":
       result= number1+number2;
       
       break;
       case"-":
       display.textContent="-"
       result=number1-number2
    break;
       case"/":
       result=number1/number2
       break
       case"*":
       result=number1*number2
       break;
       
   }
   display.textContent=result
})
btnpoint.addEventListener('click',(y)=>{
    if(setpoint==false){
        display.textContent+=""
        setpoint=true;
    }

})
btnpn.addEventListener("click",(e)=>{
    display.textContent=display.textContent*-1

});
btnpoint.addEventListener('click',(e)=>{
  if (setpoint== false) {
  display.textContent=+""
      setpoint=true
  }

  
})
btnclear.addEventListener('click',(e)=>{
display.textContent="0.0"
setpoint=false;
});
btnbackspace.addEventListener('click',(e)=>{
let lent=display.textContent.length;
if(lent>1){
    display.textContent=display.textContent.substr(0,lent-1)
}
else{
 display.textContent="0.0"
}

})
btnnumbers.forEach((items)=>{
    
    items.addEventListener('click',(R)=>{
        if(display.textContent=="0.0"){ 
            display.textContent=R.target.textContent
            ;}else{
                display.textContent += R.target.textContent;
            }
       
    })
})