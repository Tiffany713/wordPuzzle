$(document).ready(function() {
    $("form").submit(function() {
        var userSentence = $("input#userSentence").val();
        console.log(userSentence);
        
        var breakUp = userSentence.split("");
        console.log(breakUp);

        function replace(array) {
            // var newString = "";
            for (var i=0; i < array.length; i++){
                if (["a", "i", "u", "e", "o"].includes(array[i])) {
                    array[i] = "-";  
                }        
            }
            return array;
        }

        var newSent = replace(breakUp).join("");
        console.log(newSent);
        // $("#output").text(newSent);

        event.preventDefault();
    });  
});