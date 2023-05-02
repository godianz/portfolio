let slideIndex = 1;
showSlides(slideIndex);
  
//좌우버튼 클릭시 인덱스 정의
 function slides(n) {
     showSlides(slideIndex += n);
}
//preView 클릭 시 인덱스 정의
   function nextPhoto(n){
       showSlides(slideIndex = n);
 }

    //슬라이드 쇼
function showSlides(n) {
    let i;
    let myPhoto = document.getElementsByClassName("myPhoto");
    let preView = document.getElementsByClassName("preView");
    let captionText = document.getElementById("caption");


    //button(<,>) click
    if (n > myPhoto.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = myPhoto.length }
    
    //photoView
    for (i = 0; i < myPhoto.length; i++) {
      myPhoto[i].style.display = "none";
    }

    //preView
    for (i = 0; i < preView.length; i++) {
       preView[i].className = preView[i].className.replace(" active", "");
    }
    
    myPhoto[slideIndex-1].style.display="";
    preView[slideIndex-1].className += " active";

    captionText.innerHTML = preView[slideIndex-1].alt;
}