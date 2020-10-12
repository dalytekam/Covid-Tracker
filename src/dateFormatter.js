const getUtcDate =(unix_timestamp)=>{
let utcTime ="";
let date = new Date(unix_timestamp);
/*let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let mSecond= date.getMilliseconds();
let dateOfLatestUpdate= new Date(year,month,day,hours,minutes,seconds,mSecond)*/
utcTime = new Date(date).toUTCString();
return utcTime;

 }



export default getUtcDate