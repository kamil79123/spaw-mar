$(document).ready(function(){
    $("#svg1").hover(function(){
      $('#svg-color').addClass("svg-color-hover");
      }, function(){
        $('#svg-color').removeClass("svg-color-hover");
    });
  });
  $(document).ready(function(){
    $("#svg2").hover(function(){
      $('.svg-color2').addClass("svg-color-hover2");
      }, function(){
        $('.svg-color2').removeClass("svg-color-hover2");
    });
  });
  $(document).ready(function(){
    $("#svg3").hover(function(){
      $('.svg-color3').addClass("svg-color-hover2");
      }, function(){
        $('.svg-color3').removeClass("svg-color-hover2");
    });
  });