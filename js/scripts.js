$(document).ready(function() {
    $("form").submit(function() {
        var userSentence = $("input#userSentence").val();
        console.log(userSentence);
        
        var breakUp = userSentence.split("");
        console.log(breakUp);


        event.preventDefault();
    });  
});


        // var vowels = ["a", "i", "u", "e", "o"]

        
        // for (var char = 0; char < sentBreak.length; char++) {
        //     vowels.forEach(function(vowels) {
        //       if (sentBreak[i] === vowels) {
        //         sentBreak[i] = "-";
            
        //     }