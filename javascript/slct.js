/* Jeg laver en variable som gør at min function
  changeFunc kun kommer til at kører en gang, ved
  at sætte det til "true" */
var køre_en_gang = true;

function changeFunc(selectObject) {
  /* Jeg opretter function changeFunc() */

  /* Jeg oprettter to variabler som jeg kalder x og y.

    Jeg sætter disse variabler  til at bruge metoden
    get getElementById(). */
  var x = document.getElementById("myDIV"); /* x henter divet "myDIV".  */
  var y = document.getElementById("myDIV2"); /* y henter divet "my DIV2" */


  /* Jeg bruger en if statment som jeg, som køre koden under da variablen er "true" */
  if (køre_en_gang) {

    /* Jeg bruger en if-else statment som, som køre hvis køre_en_gang er "true".
       Delen kører også hvis var x display style er "block" */
    if (x.style.display === "block") {
      x.style.display = "none"; /* x display style ændres til "none" */
      y.style.display = "block"; /* y display style ændres til "block" */

      /* Hvis x display style er "none" kører dette */
    } else {
      x.style.display = "block"; /* x display style ændres til "block" */
      y.style.display = "none"; /* y display style ændres til "none" */
    }
    køre_en_gang = false;
    /* var køre_en_gang sættes til false og koden kan derfor
                             ikke kører igen */
  }
};
