const text = document.querySelector(".title span");
const dateUser = new Date().getHours();

function checkTime(){
    if(dateUser <= 12){
        text.textContent = "Hello"
    }else if(dateUser > 12 && dateUser <= 19){
        text.textContent = "Good afternoon"
    }else{
        text.textContent = "Good evening"
    }
}

checkTime();