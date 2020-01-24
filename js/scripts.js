$(document).ready(function() {
  
    $("form#formOne").submit(function(event) {
        event.preventDefault();
        var number = $("input#number").val();
        var result = "";
        for (var i =0; i<=number; i++) {
           var transformOutput  = transform(i);
           result = result.concat(transformOutput).concat(", ");            
        }
        result = result.substring(0,result.length-2);
        $("#result").text(result);
        $("#image").show();

    });

    function transform(input) {
        var output;
        if (input.toString().includes("3")===true) {
            output = "I'm sorry, Dave. I'm afaraid I can't do that.";
        } else if (input.toString().includes("2")===true) {
            output = "Beep!";
        } else if (input.toString().includes("1")===true){
            output = "Boop!";
        } else {
            output= input;
        }
        return output;
    }
});