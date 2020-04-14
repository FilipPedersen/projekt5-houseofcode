$(document).ready(function() {
  console.log("ready!");

  $(".kon-btn").click(function() {
    console.log("billede2");
    $(".pattern-email").hide("drop", {
      direction: "right"
    }, "slow");
    $(".pattern-email img").css("display", "block", );
    event.stopPropagation();
    event.preventDefault();




  });





  $(".kon-btn").click(function() {
    $(".pattern-email").show("drop", {
      direction: "right"
    }, "slow");
    event.preventDefault(1);



  });


});
