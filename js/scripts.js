$(function() {
  $("#blanks form").submit(function(event) {
  var whatYouBought = $("#whatyoubought").val();
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  var address = $("#address").val();
  var email = $("#email").val();
  var cardNumber = $("#cardnumber").val();
  $(".whatyoubought").text(whatYouBought);
  $(".firstname").text(firstName);
  $(".lastname").text(lastName);
  $(".address").text(address);
  $(".email").text(email);
  $(".cardnumber").text(cardNumber);
  $("#receipt").show();
  event.preventDefault();
  });
});
