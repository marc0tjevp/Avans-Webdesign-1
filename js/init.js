$(document).ready(function () {

  $("h1").css({"color":"green"});

  var vol = 8 * 3 * 2;
  document.getElementById('calculated').textContent= vol + " m3";
  document.getElementById('calculated').style.fontSize = "32px";
  document.getElementById('calculated').style.color = "red";

  $("#btn").click(function(){
    $(".col3").css({"font-family":"Comic Sans MS"});
  });

  $("#rotateup").click(function(){
    document.getElementsByClassName("welcome")[0].style.transform = "rotate(0deg)";
  });

  $("#rotatedown").click(function(){
    document.getElementsByClassName("welcome")[0].style.transform = "rotate(180deg)";
  });

  $("#calculate").click(function(){
    var x = parseInt(document.getElementById('wdt').value);
    var y = parseInt(document.getElementById('lgt').value);
    var z = parseInt(document.getElementById('hgt').value);

    var vol = x * y * z;

    document.getElementById('ans').textContent="Het volume is = " + vol + " m3";
  });
});
