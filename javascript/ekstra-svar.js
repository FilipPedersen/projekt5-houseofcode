function changeFunc(selectObject) {  /* Jeg opretter function changeFunc() */

/* Jeg oprettter en variabler som jeg value
   som skal hentet den value som er selected i functionen */
  var value = selectObject.value;

/* Jeg oprettter to variabler som jeg kalder z, x og y.

   Jeg sætter disse variabler  til at bruge metode
   get getElementById(). */
  var z = document.getElementById("myDIV3");  /* z henter divet "myDIV3".  */
  var x = document.getElementById("myDIV");   /* x henter divet "my DIV"   */
  var y = document.getElementById("myDIV2");  /* y henter divet "my DIV2"  */
  console.log(value); /* valuen bliver printet ud i loggen som et check    */

  /* Jeg bruger en if-else statment som hvis det valgte objekt er
     "6" */
  if (selectObject.value === "6") {
    z.style.display = "block";  /* z display style ændres til "block" */
    x.style.display = "block";  /* x display style ændres til "block" */
    y.style.display = "none";   /* y display style ændres til "none" */
  } else {
    z.style.display = "none";   /* z display style ændres til "none" */
    x.style.display = "block";  /* x display style ændres til "block" */
    y.style.display = "none";   /* y display style ændres til "none" */

  }

};
