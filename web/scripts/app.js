var app = document.getElementById("app");

var parentEle = document.getElementById("header-nav");
var anchor = parentEle.querySelectorAll(".anchorTag");
var i = 0;                    
// for(; i <= anchor.length; i++){
//     alert(i);
//     anchor[i].addEventListener("click", navigation);
// }

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        app.innerHTML =  this.responseText;
    }
}

xmlhttp.open("GET", "about.php", true);
xmlhttp.send();

function navigation(e){
    alert(e.id);
}

