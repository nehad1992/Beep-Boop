$(document).ready(function() {
    $("form#formOne").submit(function(event) {
        event.preventDefault();
        var array = $("input#number").val();
        for (var i=0; i<=array.length;i++){
            if (array[i]==="3") {
                var result = "I'm sorry, Dave.I'm afraid I can't do that";
                console.log(1);
                array = result;
                console.log(2);
                alert(array);
            }
        }
    });
});