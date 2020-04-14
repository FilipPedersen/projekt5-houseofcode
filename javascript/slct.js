var køre_en_gang = true;
function changeFunc() {
 var x = document.getElementById("myDIV");
 var y = document.getElementById("myDIV2");

if (køre_en_gang){
   if (x.style.display === "block") {
   x.style.display = "none";
   y.style.display = "block";
 } else {
   x.style.display = "block";
   y.style.display = "none";
 }
 køre_en_gang = false;
}
};
