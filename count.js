const endDate = "18 jun  2024 12:00 pm";

document.getElementById("end-date").innerText = endDate;
 const inputs =document.querySelectorAll("input");

function clock(params) {
    const end = new Date(endDate)
    const now = new Date()
    /*console.log(end);
    console.log(now);*/
    const diff = (end-now)/1000;

    /// 
    if(diff<0) return;
    //console.log(diff);
    //console.log(Math.floor(diff/3600/24));
    // convert into days
    
    inputs[0].value = Math.floor(diff/3600/24);
    // convert into hours
    
   inputs[1].value= (Math.floor(diff/3600)% 24)
    // convert minutes
    inputs[2].value=(Math.floor(diff/60)%60)
////   convert into sec 
inputs[3].value= Math.floor(diff)%60;
    
}
clock();

setInterval(() =>{


    clock();
} ,1000);