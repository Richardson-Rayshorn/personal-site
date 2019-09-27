var app = document.getElementById("app");

var anchor = document.querySelectorAll(".anchorTag");
var i;                    
for(i =0; i < anchor.length; i++){
    alert(i);
    anchor[i].addEventListener("click", navigation);
}

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        app.innerHTML =  this.responseText;
    }
}

xmlhttp.open("GET", "about.php", true);
xmlhttp.send();

function navigation(){
    alert(i);
    for(; i < anchor.length; i++){
        if(anchor[i].id === "about"){
            xmlhttp.open("GET", "about.php", true);
            xmlhttp.send();
        }
        else if(anchor[i].id === "assignments"){
            xmlhttp.open("GET", "assignment.php", true);
            xmlhttp.send();
        }
        break;
    }
}

