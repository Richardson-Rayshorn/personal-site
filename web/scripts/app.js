var app = document.getElementById("app");

var parentEle = document.getElementById("header-nav");
var anchor = parentEle.querySelectorAll(".anchorTag");

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        app.innerHTML =  this.responseText;
    }
}

xmlhttp.open("GET", "about.php", true);
xmlhttp.send();

function navigation(e){
    var i = 0; 
    for(; i <= anchor.length; i++){
        if(anchor[i].id === e.id){
            xmlhttp.open("GET", e.id + ".php", true);
            xmlhttp.send();
            break;
        }
    }

    // e.id.addEventListener("click", invisibleNav);

    // function invisibleNav(){
    //     //get the navbar and toggle it
        var nav = document.getElementById("navbar");
        nav.classList.remove("visible-nav");
    // }
}

function navWork(e){
    xmlhttp.open("GET", e.id + ".php", true);
    xmlhttp.send();
}

