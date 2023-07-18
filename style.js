// const imagePosition = document.querySelectorAll(".slide img")
// const slideContainer = document.querySelector(".slide")
// const iconContainer = document.querySelectorAll(".circle")
// let lengthImage = imagePosition.length
// let index = 0;
// let number = 0
// imagePosition.forEach(function(image,index){
//     console.log(image,index)
//     image.style.left = index * 100 + "%"   
//     iconContainer[index].addEventListener("click",function(){
//         slider(index)
//     })
// })
// function imgSlide(){
//     index = number
//     number++
//     index ++;
//         if(index >= lengthImage){
//             index = 0;  
//         }
//     if(number >= lengthImage){
//         number = 0;  
//     }
//     slideContainer.style.left = "-" + index * 100 + "%"
//     slider(index)
// }
// function slider(index){
//     slideContainer.style.left = "-" + index * 100 + "%"
//         number = index
//         const iconContainer1 = document.querySelector(".icon-circle-color")
//         iconContainer1.classList.remove("icon-circle-color")
//         iconContainer[index].classList.add("icon-circle-color")
// }
// setInterval(imgSlide,3000)
$(document).ready(function() {
    var isMouseDown = false;
    var startX, scrollLeft;
  
    $(".banner-container").on("mousedown", function(e) {
      isMouseDown = true;
      startX = e.pageX - $(".banner-container").offset().left;
      scrollLeft = $(".banner-container").scrollLeft();
    });
  
    $(".banner-container").on("mouseup", function() {
      isMouseDown = false;
    });
  
    $(".banner-container").on("mousemove", function(e) {
      if (!isMouseDown) return;
      e.preventDefault();
      var x = e.pageX - $(".banner-container").offset().left;
      var walk = (x - startX) * 2;
      $(".banner-container").scrollLeft(scrollLeft - walk);
    });
  });
  