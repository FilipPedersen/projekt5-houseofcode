$(document).ready(function(){


  $(".mobilknap-undersider").each(function(index, value){


    $(this).click(function(){
      $(this)
      .css('color', 'white')
      .css('background-color', '#A5BA75')
      .addClass("wasClicked");


    });




});


});
