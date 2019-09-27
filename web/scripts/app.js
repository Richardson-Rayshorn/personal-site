var app = document.getElementById("app");

var anchor = document.querySelector(".anchorTag")
                    .addEventListener("click", navigation);

function navigation(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            app.innerHTML =  this.responseText;
        }
    }
    if(anchor.id === "about"){
        xmlhttp.open("GET", "about.php", true);
        xmlhttp.send();
    }
}

