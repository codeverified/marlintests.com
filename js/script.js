document.getElementById("verifyBtn").addEventListener("click", function(){

    const cert = document.getElementById("certificate").value.trim();

    if(cert === ""){
        alert("Please enter a certificate code.");
        return;
    }

    window.location.href = "result.html?cert=" + encodeURIComponent(cert);

});
