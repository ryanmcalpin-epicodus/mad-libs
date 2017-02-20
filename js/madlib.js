$(document).ready(function() {
  $("#madlib form").submit(function() {
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    var blanks = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];

    blanks.forEach(function(blank){
      var  userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });

  // $("#self-letter form").submit(function() {
  //   var username = $('#user-name').val();
  //
  //   $('.user-name-output').text(username);
  //   $('#user-name').fadeOut();
  //   $("#response-letter").slideDown();

    // event.preventDefault();
  });
