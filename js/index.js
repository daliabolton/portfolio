$( function(){
    $("#popup").popup({
        autoOpen:false,
        show:{
            effect: "blind",
            duration: 1000
        },
        hide:{
            effect: "explode",
            duration: 1000
        }
    });

    


$(document).ready(function(){
    $("#popup").click(function(){
        $("#popup").popup("open");
    });
});
});


$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });