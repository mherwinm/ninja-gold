var gold=0;
var result=0;
$(document).ready(function() {
    $("#cave").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);
        gold=5;
        result += gold;
        alert("You found a coin inside! :)\n +  5 gold");
        $("#gold").text(result);
        $("ol").append("<li>Cave / "+result+"/ 5 / 0</li>");
    });

    $("#house").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);
        if(Math.random() < 0.8) {
            gold=10;
            result += gold;
            alert("You found a coin inside! :)\n+ 10 gold");
            $("#gold").text(result);
            $("ol").append("<li>House / "+result+"/ 10 / 0</li>");
            } else {
            gold=0;
            result += gold;
            alert("You found NOTHING :|\n+ 0 gold");
            $("#gold").text(result);
            $("ol").append("<li>House / "+result+"/ 0 / 0</li>");
        }
    });

    $("#gold-mine").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);
        if(Math.random() < 0.8) {
            var min = 1;var max = 25;
            gold = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You found a gold bag! :)\n+ "+gold + "gold");
            result += gold;
            $("#gold").text(result);
            $("ol").append("<li>Gold mine / "+result+"/"+gold+"/ 0</li>");
            } else {
            gold=0;
            result += gold;
            alert("You gained NOTHING :|\n+ 0 gold");
            $("#gold").text(result);
            $("ol").append("<li>Gold mine / "+result+"/ 0 / 0</li>");
        } 
    });

    $("#casino").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);   
        if(Math.random() < 0.5) {
            var min = 40;var max = 50;
            gold = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You won the lottery! :)\n+ "+gold + "coins");
            result += gold;
            $("#gold").text(result);
            $("ol").append("<li>Casino / "+result+"/"+gold+"/ 0</li>");
            } else {
            var min = 40;var max = 50;
            gold = Math.floor(Math.random() * (max - min + 1) + min);
            alert("The casino dealer tricked you :(\n- "+gold + "gold");
            result -= gold;
            $("#gold").text(result);
            $("ol").append("<li>Casino / "+result+"/0/"+gold+"</li>");
        } 
    });

  









});