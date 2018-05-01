$( document ).ready(function() {

  // var init
  var today = new Date();
  today.setHours(0,0,0,0);
  var pastChristmas;

  //Checking if it's been Xmas already this year
  if (today.getMonth() == 11 && today.getDate() >= 25) {
    //It's already (been) Xmas this year
    pastChristmas = new Date(today.getFullYear(), 11, 25);
  } else {
    //It's NOT already (been) Xmas this year
    pastChristmas = new Date((today.getFullYear() - 1), 11, 25);
  }


  // Calculating difference between dates
  var oneDay = 24*60*60*1000;
  var diffDays = Math.round(Math.abs((today.getTime() - pastChristmas.getTime())/(oneDay)));
  var daysSinceXmas = diffDays + 1;

  $("#XmasDays").html(daysSinceXmas);

});
