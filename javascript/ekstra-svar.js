function changeFunc(selectObject) {
  var value = selectObject.value;
  var z = document.getElementById("myDIV3");
  var x = document.getElementById("myDIV");
  var y = document.getElementById("myDIV2");
  console.log(value);

  if (selectObject.value === "6") {
    z.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";

  } else {
    z.style.display = "none";
    x.style.display = "block";
    y.style.display = "none";

  }

};
