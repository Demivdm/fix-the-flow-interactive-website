
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(" .popup .sluitknop").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

