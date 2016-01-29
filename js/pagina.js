 $(document).ready(function(){
 	$("#a").mouseenter(function(){
  	$("#titulo").css("opacity","1");
   var p=$("#titulo")
   p.animate({ fontSize: "10em",opacity:'1'},5000);
    
  });
    $("#a").mouseleave(function(){
    $("#titulo").css("opacity","1");
   var p=$("#titulo")
   p.animate({ fontSize: "4em",opacity:'1'},5000);
    
  });

    $('.nav li').hover(
    
        function(){
            $('ul', this).fadeToggle(180);
           
        }
    
    );

    $('li a').mouseenter(function(){
 $(this).css({"background-color":"yellow"});
    });
    $('li a').mouseleave(function(){
 $(this).css({"background-color":""});
    });

});