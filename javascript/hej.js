$(document).ready(function(){
  $(".standardknap").click(function(){
    console.log("hi")

    $(".blueknap").hide();
    $(".knapper2")
      .html("<a class='blueknap'>Næste</a>")

    $(".blueknap")
      .css('color', 'white')
      .css('background-color', '#7CA5B8');

  });


});
//<script src="../javascript/js5.js"></script>
//<script src="../javascript/js.js"></script>
