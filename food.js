const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const collapse = document.querySelector(".collapse ")

menuIcon.addEventListener("click", function(){

   collapse.classList.add("active");
   closeIcon.style.display="block";

})
closeIcon.addEventListener("click", function(){
    
   collapse.classList.remove("active");
   closeIcon.style.display="none";
})