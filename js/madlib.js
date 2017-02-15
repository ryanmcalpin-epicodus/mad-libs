$(document).ready(function() {
  $("#madlib form").submit(function() {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#self-letter form").submit(function() {
    var username = $('#user-name').val();

    $('.user-name-output').text(username);
    $('#user-name').fadeOut();
    $("#response-letter").slideDown();

    event.preventDefault();
  });
});
