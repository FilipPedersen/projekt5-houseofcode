$(document).ready(function(){

  var clicked=null;

  $(".standardknap").click(function(){
    console.log("hi")

    $(".blueknap").hide();
    $(".knapper2")
      .html("<a class='blueknap'>Næste</a>")

    $(".blueknap")
      .css('color', 'white')
      .css('background-color', '#7CA5B8');

  });
  $("#buttonOne").click(function(){
    $(this)
    .css('color', 'white')
    .css('background-color', '#a6bb75');
    one();
  });

  $("#buttonTwo").click(function(){
    $(this)
    .css('color', 'white')
    .css('background-color', '#a6bb75');
    two();
  });



  function one(){
    $("#buttonTwo")
    .css('color', '#a6bb75')
    .css('background-color', ' white');
  }

  function two(){
    $("#buttonOne")
    .css('color', '#a6bb75')
    .css('background-color', ' white');
  }

});
//<script src="../javascript/js5.js"></script>
//<script src="../javascript/js.js"></script>
