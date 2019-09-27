var app = document.getElementById("app");

var anchor = document.querySelectorAll(".anchorTag");
var i;                    
for(i =0; i < anchor.length; i++){
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
    // if(anchor.id === "about"){
    //     xmlhttp.open("GET", "about.php", true);
    //     xmlhttp.send();
    // }
    // else if(anchor.id === "about"){
    //     xmlhttp.open("GET", "about.php", true);
    //     xmlhttp.send();
    // }
    alert("test");
    alert(anchor.id);
}

