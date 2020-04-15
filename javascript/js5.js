$(document).ready(function(){

  var newBg = "../img/baugrund.png"; //variable til grå baggrund
  var oldBg = "../img/bodyimg.svg"; //variable til normale baggrund
  $(".blueknap").click(function(){ //tjekker når der klikkes på den knap med klassen standardknap
    $('body') //tager fat i bodyen af den givne html side
        .animate({opacity: 0},300 , function() { // bruger jquery animate funktion til at ændre opacity og venter 300 del af et sekund
            $(this)//refererer til min parent altså body
                .css({'background-image': 'url('+newBg+')'})//ændre css bagrrund billede til new bg
                .animate({opacity: 1}) //sætter opacity til 1 igen
                .css({'background-image': 'url('+oldBg+')'}) //ændre css bagrrund billede til old bg
                .load("integrer-hjemmeside.html"); //loader den givne side husk at brug live server

        });
    });


    $(".knapper2").click(function(){ //tjekker når der klikkes på den knap med klassen standardknap
      $('body') //tager fat i bodyen af den givne html side
          .animate({opacity: 0},300 , function() { // bruger jquery animate funktion til at ændre opacity og venter 300 del af et sekund
              $(this)//refererer til min parent altså body
                  .css({'background-image': 'url('+newBg+')'})//ændre css bagrrund billede til new bg
                  .animate({opacity: 1}) //sætter opacity til 1 igen
                  .css({'background-image': 'url('+oldBg+')'}) //ændre css bagrrund billede til old bg
                  .load("integrer-hjemmeside.html"); //loader den givne side husk at brug live server

          });
      });


      $(".mobilknap-undersider-videre-knap").click(function(){ //tjekker når der klikkes på den knap med klassen standardknap
        $('body') //tager fat i bodyen af den givne html side
            .animate({opacity: 0},300 , function() { // bruger jquery animate funktion til at ændre opacity og venter 300 del af et sekund
                $(this)//refererer til min parent altså body
                    .css({'background-image': 'url('+newBg+')'})//ændre css bagrrund billede til new bg
                    .animate({opacity: 1}) //sætter opacity til 1 igen
                    .css({'background-image': 'url('+oldBg+')'}) //ændre css bagrrund billede til old bg
                    .load("integrer-hjemmeside.html"); //loader den givne side husk at brug live server

            });
        });

        $(".mobilknap-undersider-videre-knap-blue").click(function(){ //tjekker når der klikkes på den knap med klassen standardknap
          $('body') //tager fat i bodyen af den givne html side
              .animate({opacity: 0},300 , function() { // bruger jquery animate funktion til at ændre opacity og venter 300 del af et sekund
                  $(this)//refererer til min parent altså body
                      .css({'background-image': 'url('+newBg+')'})//ændre css bagrrund billede til new bg
                      .animate({opacity: 1}) //sætter opacity til 1 igen
                      .css({'background-image': 'url('+oldBg+')'}) //ændre css bagrrund billede til old bg
                      .load("integrer-hjemmeside.html"); //loader den givne side husk at brug live server

              });
          });

          const navSlide = () => {
            const burgermenu = document.querySelector('.menu');
            const nav = document.querySelector('.nav-links2');

            burgermenu.addEventListener('click',()=>{
              nav.classList.toggle('nav-active');
            });
          }

          navSlide();


   });
