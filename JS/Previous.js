document.addEventListener("DOMContentLoaded",function () {
    const images = document.querySelectorAll(".images img");
    
    const modal = document.querySelector(".modal");
    const closebtn = document.querySelector(".close");
    const modalImg = document.querySelector(".modal-img");
    const modalTxt = document.querySelector(".modal-txt");
    let currentIndex = 0;
    
    const prevBtn = document.querySelector(".btnPrev");
    const nextBtn = document.querySelector(".btnNext");

  


    //Add Click Event for All Images
    images.forEach((image,index) => {
      image.addEventListener("click",function (){
      currentIndex = index;
      upadateModalContent();
      modal.classList.add("show");
    });
  });
   //Update Image in modal
   function upadateModalContent () {
    const image = images [currentIndex];
    modalImg.classList.remove("show");
    setTimeout(() => {
      modalImg.src = image.src;
      modalTxt.innerHTML = image.alt;
      modalImg.classList.add("show");
    }, 300);
   }

   //Next button onclick
     nextBtn.addEventListener ("click", function(){
     currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
     upadateModalContent();
   });

   //Previous button onclick
    prevBtn.addEventListener ("click", function(){
    currentIndex = currentIndex - 1 <0 ?images.length-1 : currentIndex - 1;
    upadateModalContent();
  });

  //Close for Class Icon
  closebtn.addEventListener("click", function (){
    modal.classList.remove("show"); 
  });
});