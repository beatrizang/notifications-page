
document.getElementById("all-read").addEventListener("click", quitar_notificaciones);

var notifications = document.getElementsByClassName("notification");
var dots = document.getElementsByClassName("notification__dot");
var count = 0;


for(i=0;i<notifications.length;i++){
    if(notifications[i].style.background != "#fff"){
        count++;
    }
}
document.getElementById("counter").innerHTML = count;



function quitar_notificaciones(){
    for(i=0;i<notifications.length;i++){
        notifications[i].style.background = "#fff";
        dots[i].style.display = "none";
    }
    count = 0
    document.getElementById("counter").innerHTML = count;
}

function selected(index){
    notifications[index].style.background = "#fff";
    dots[index].style.display = "none";
    if(count-- > 0){
        document.getElementById("counter").innerHTML = count;
    }
    
}