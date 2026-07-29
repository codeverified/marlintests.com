document
.getElementById("verifyBtn")
.addEventListener("click",function(){

const cert=document
.getElementById("certificate")
.value;

window.location.href=
"result.html?cert="+cert;

});
