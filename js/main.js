$(document).ready(function (){
    var Time=300;

    $(".whole").animate({
            opacity:'1'
    }, Time, function(){
        $(".box1").animate({
            opacity:'1'
        },Time, function(){
            $(".box2").animate({
                opacity:'1'
            }, Time, function (){
                $(".box2-1").animate({
                    opacity:'1'
                }, Time, function (){
                    $(".box3").animate({
                        opacity:'1'
                    }, Time, function (){
                        $(".box4").animate({
                            opacity:'1'
                        }, Time, function(){
                            $(".box5").animate({
                                opacity:'1'
                            },Time);
                        });
                    });
                });
            });
        });
    });

var Dropdown = document.getElementsByClassName("Dropdown-Btn");
var i;

for(i=0; i<Dropdown.length; i++) {
    Dropdown[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var DropdownContent = this.nextElementSibling;
        if(DropdownContent.style.display === "flex") {
            DropdownContent.style.display = "none";
        } else {
            DropdownContent.style.display = "flex";
        }
    });
}

});


