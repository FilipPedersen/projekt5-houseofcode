$(document).ready(function() {
  console.log("ready!");

  $(".standardknap").click(function() {
    console.log("billede2");
    $(".illustrationmobil").hide("drop", {
      direction: "right"
    }, "slow");
    $(".illustrationmobil").css("display", "block", );
    event.stopPropagation();
    event.preventDefault();




  });





  $(".standdardknap").click(function() {
    $(".illustrationmobil").show("drop", {
      direction: "right"
    }, "slow");
    event.preventDefault(1);



  });


});
