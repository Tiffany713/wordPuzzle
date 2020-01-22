
$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();

      $("#affect-responses").show();
      $("input:checkbox[name=affect]:checked").each(function(){
        var stressAffect = $(this).val();
        $('#affect-responses').append(stressAffect + "<br>");
        // console.log(stressAffect);
        
      });
      $("#symptoms-responses").show();
      $("input:checkbox[name=symptoms]:checked").each(function(){
        var stressSymptoms = $(this).val();
        $('#symptoms-responses').append(stressSymptoms + "<br>");
        // console.log(stressSymptoms);
      });

      $("#solution-responses").show();
      $("input:checkbox[name=solution]:checked").each(function(){
        var stressSolution = $(this).val();
        $('#solution-responses').append(stressSolution + "<br>");
        // console.log(stressSolution);
      });
      
      var countChecked1 = function() {
        var n = $( "input:checkbox[name=affect]:checked" ).length;
        $("#links").text(n);
      };
      countChecked1();

      var countChecked2 = function() {
        var n = $( "input:checkbox[name=symptoms]:checked" ).length;
        $("#links2").text(n);
      };
      countChecked2();

      var countChecked3 = function() {
        var n = $( "input:checkbox[name=solution]:checked" ).length;
        $("#links3").text(n);
      };
      countChecked3();


      $("#links").show();
      $("#links2").show();
      $("#links3").show();
      
      $('form').hide();
    });
  });
  


        // for (var i=0; i < Array.length; i++) {
        //   if (["> 3"])
        // }
