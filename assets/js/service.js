const calender=document.getElementById("calender");
const showHours=document.getElementById("Hours");
const showMinutes=document.getElementById("minutes");
const showSeconds=document.getElementById("seconds");
const showDay =document.getElementById("Day");
const showMonth=document.getElementById("Month");
const showYear=document.getElementById("Year");
const showWhen=document.getElementById("when");

const date=new Date();
const day=date.getDate();
const month=date.getMonth()+1;
const year=date.getFullYear();
const Hour=date.getHours();
const Minute=date.getMinutes();
const seconds=date.getSeconds();
 const when=date.getDay();
 const daynumber=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const exectday=daynumber[when];

const display0= `${day}`;
const display01=`${month}`;
const display02=`${year}`;
const display03=`${exectday}`;
const display1=`${Hour}`;
 const display2=`${Minute}`;
 const display3=`${seconds}`;

showHours.innerHTML=display1;
showMinutes.innerHTML=display2;
showSeconds.innerHTML=display3;
showDay.innerHTML=display0;
showMonth.innerHTML=display01;
showYear.innerHTML=display02;
 showWhen.innerHTML=display03;