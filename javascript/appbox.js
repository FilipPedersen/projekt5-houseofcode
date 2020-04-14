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
  $("#4").click(function() {
    four();
  });
  $("#5").click(function() {
    five();
  });
  $("#6").click(function() {
    six();
  });






  function one() {
    $("#1").css('color', 'white').css('background-color', '#a6bb75');

    $("#2,#3,#4,#5,#6").css('color', ' #a6bb75').css('background-color', 'white');
  }


  function two() {
    $("#2").css('color', 'white').css('background-color', '#a6bb75');
    $("#1,#3,#4,#5,#6").css('color', ' #a6bb75').css('background-color', 'white');
  }

  function three() {
    $("#3").css('color', 'white').css('background-color', '#a6bb75');
    $("#2,#1,#4,#5,#6").css('color', ' #a6bb75').css('background-color', 'white');
  }

  function four() {
    $("#4").css('color', 'white').css('background-color', '#a6bb75');
    $("#2,#3,#1,#5,#6").css('color', ' #a6bb75').css('background-color', 'white');
  }

  function five() {
    $("#5").css('color', 'white').css('background-color', '#a6bb75');
    $("#2,#3,#4,#1,#6").css('color', ' #a6bb75').css('background-color', 'white');
  }

  function six() {
    $("#6").css('color', 'white').css('background-color', '#a6bb75');
    $("#2,#3,#4,#5,#1").css('color', ' #a6bb75').css('background-color', 'white');
  }
});
