console.log("HELLOOOOOOO")

try{
    if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
)
) {
    console.log("PHONE");
    var a = document.getElementById("phone");
    a.style.backgroundColor = "red";
    a.style.width = "545px";
    a.style.backgroundColor = "white";

}
else{
    console.log("LAPTOP OR PC!")
}
}
catch{
    ;
}

function gotoPage() {
    window.location.href = "../index.html";
}
