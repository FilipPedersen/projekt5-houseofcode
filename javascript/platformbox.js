$(document).ready(function() {
  $(".standardknap").click(function() {
    console.log("hi")

    $(".blueknap").hide();



    $(".knapper2").html("<a class='blueknap'>Næste</a>");



    $(".blueknap")
      .css('color', 'white')
      .css('background-color', '#7CA5B8');


  });

  $("#1").click(function() {
    one();
  });

  $("#2").click(function() {
    two()();
  });
  $("#3").click(function() {
    three();
  });







  function one() {
    $("#1").css('color', 'white').css('background-color', '#a6bb75');

    $("#2,#3").css('color', ' #a6bb75').css('background-color', 'white');
  }


  function two() {
    $("#2").css('color', 'white').css('background-color', '#a6bb75');
    $("#1,#3").css('color', ' #a6bb75').css('background-color', 'white');
  }

  function three() {
    $("#3").css('color', 'white').css('background-color', '#a6bb75');
    $("#2,#1").css('color', ' #a6bb75').css('background-color', 'white');
  }
});
