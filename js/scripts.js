$(document).ready(function() {
    $("form#formOne").submit(function(event) {
        event.preventDefault();
        var array = $("input#number").val();
        for (var i=0; i<=array.length;i++){
            if (array[i]==="3") {
                var result = "I'm sorry, Dave.I'm afraid I can't do that";
                array = result;
                alert(array);
                break;
            } else if (array[i]==="2") {
                var result = "Boop!";
                array = result;
                alert(array);
                break;
            } else if (array[i] === "1") {
                var result = "Beep!";
                array = result;
                alert(result);
                break;
            }
        }
    });
});