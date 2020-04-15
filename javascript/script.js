/* Jeg bruger en jQuery her til at skifte stylen af knapper (button) */

/* Jeg laver en click funktion Ved hjælp af jQueryen ($), som hentter
   alle knapper med id=farve-skift */
  $( "button#farve-skift" ).click(function() {

/* $(this) er en jQuery-indpakning omkring det element, der muliggør brug af
   jQuery-metoder, som her er .toggleClass.

  .toggleClass add'er eller fjerner en class til et element, her tilfører
  .toggleClass classen "selected" til den trykket knap*/
  $(this).toggleClass( "selected" );
});
