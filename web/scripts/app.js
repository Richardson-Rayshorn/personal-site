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

function navigation(){
    // alert(i);
    // alert(anchor.length);
    for(; i <= anchor.length; i++){
        // if(anchor[i].id == "about"){
        //     xmlhttp.open("GET", "about.php", true);
        //     xmlhttp.send();
        // }
        // else if(anchor[i].onclick == true && anchor[i].id == "assignments"){
        //     xmlhttp.open("GET", "assignment.php", true);
        //     xmlhttp.send();
        // }
        if(anchor[i].id.clicked === true){
            alert(anchor[i].id);
        }
        alert(i);
    }
}

