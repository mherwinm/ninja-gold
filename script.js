var gold=0;
var result=0;
var gain=0;
var loss=0;
var absloss=0;

$(document).ready(function() {
    $("#cave").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);
        if($(".numtry").text() >= 0){
        gold=5;
        result += gold;
        gain += gold;
        $("#ninja-container").css('margin-left', '50px');
        alert("You found a gold coin inside! :)\n +  5 gold");
        $("#gold").text(result).css('color', 'green');
        $("#status ol").append("<li>&nbsp;/&nbsp;Cave&nbsp;/&nbsp;"+result+"/&nbsp;5&nbsp;/&nbsp;0</li>");
        $("#status ol li").css('color', 'green');
        $("#total-gain ol").append("<li>/&nbsp;Cave&nbsp;/&nbsp;"+gold+"</li>");
        $("#total-loss ol").append("<li>/&nbsp;Cave&nbsp;/&nbsp;0&nbsp;</li>");
        $("#total-gain p").text(gain);
        } else {alert("Game Over!");
        $(".numtry").text(0);
        }

    });

    $("#house").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);
        if($(".numtry").text() >= 0){
        if(Math.random() < 0.8) {
            gold=10;
            result += gold;
            gain += gold;
            $("#ninja-container").css('margin-left', '250px');
            alert("You found a gold coin inside! :)\n+ 10 gold");
            $("#gold").text(result).css('color', 'green');
            $("#status ol").append("<li>&nbsp;/&nbsp;House&nbsp;/&nbsp;"+result+"/&nbsp;10&nbsp;/&nbsp;0</li>");
            $("#status ol li").css('color', 'green');
            $("#total-gain ol").append("<li>/&nbsp;House&nbsp;/&nbsp;"+gold+"</li>");
            $("#total-loss ol").append("<li>/&nbsp;House&nbsp;/&nbsp;0&nbsp;</li>");
            $("#total-gain p").text(gain);
            } else {
            gold=0;
            result += gold;
            gain += gold;
            alert("You found NOTHING :|\n+ 0 gold");
            $("#gold").text(result).css('color', 'black');
            $("#status ol").append("<li>&nbsp;/&nbsp;House&nbsp;/&nbsp;"+result+"/&nbsp;0&nbsp;/&nbsp;0</li>");
            $("#status ol li").css('color', 'black');
            $("#total-gain ol").append("<li>/&nbsp;House&nbsp;/&nbsp;"+gold+"</li>");
            $("#total-loss ol").append("<li>/&nbsp;House&nbsp;/&nbsp;0&nbsp;</li>");
            $("#total-gain p").text(gain);}
        } else {alert("Game Over!");
        $(".numtry").text(0);
        }
    });

    $("#gold-mine").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);
        if($(".numtry").text() >= 0){
        $("#ninja-container").css('margin-left', '450px');
        if(Math.random() < 0.8) {
            var min = 1;var max = 25;
            gold = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You found a gold bag! :)\n+ "+gold + "gold");
            result += gold;
            gain += gold;
            $("#gold").text(result).css('color', 'green');
            $("#status ol").append("<li>&nbsp;/&nbsp;Gold mine&nbsp;/&nbsp;"+result+"/&nbsp;"+gold+"&nbsp;/&nbsp;0</li>");
            $("#status ol li").css('color', 'green');
            $("#total-gain ol").append("<li>/&nbsp;Gold Mine&nbsp;/&nbsp;"+gold+"</li>");
            $("#total-loss ol").append("<li>/&nbsp;Gold Mine&nbsp;/&nbsp;0&nbsp;</li>");
            $("#total-gain p").text(gain);
            } else {
            gold=0;
            result += gold;
            gain += gold;
            alert("You gained NOTHING :|\n+ 0 gold");
            $("#gold").text(result).css('color', 'black');
            $("#status ol").append("<li>&nbsp;/&nbsp;Gold mine&nbsp;/&nbsp;"+result+"&nbsp;/&nbsp;0&nbsp;/&nbsp;0</li>"); 
            $("#status ol li").css('color', 'black');
            $("#total-gain ol").append("<li>/&nbsp;Gold Mine&nbsp;/&nbsp;"+gold+"</li>");
            $("#total-loss ol").append("<li>/&nbsp;Gold Mine&nbsp;/&nbsp;0&nbsp;</li>");
            $("#total-gain p").text(gain);}
        } else {alert("Game Over!");
        $(".numtry").text(0);
         }
    });

    $("#casino").click(function(){
        var value = parseInt($(".numtry").text(), 10) - 1;
        $(".numtry").text(value);   
        if($(".numtry").text() >= 0){
            $("#ninja-container").css('margin-left', '650px');
            if(Math.random() < 0.5) {
            var min = 40;var max = 50;
            gold = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You won the lottery! :)\n+ "+gold + "coins");
            result += gold;
            gain += gold;
            $("#gold").text(result).css('color', 'green');
            $("#status ol").append("<li>&nbsp;/&nbsp;Casino&nbsp;/&nbsp;"+result+"&nbsp;/"+gold+"&nbsp;/&nbsp;0</li>");
            $("#status ol li").css('color', 'green');
            $("#total-gain ol").append("<li>/&nbsp;Casino&nbsp;/&nbsp;"+gold+"</li>");
            $("#total-loss ol").append("<li>/&nbsp;Casino&nbsp;/&nbsp;0&nbsp;</li>");
            $("#total-gain p").text(gain);
            } else {
            var min = 40;var max = 50;
            gold = Math.floor(Math.random() * (max - min + 1) + min);
            alert("The casino dealer tricked you :(\n- "+gold + "gold");
            result -= gold;
            loss -= gold;
            $("#gold").text(result).css('color', 'red');
            $("#status ol").append("<li>&nbsp;/&nbsp;Casino&nbsp;/&nbsp;"+result+"/&nbsp;0&nbsp;/&nbsp;"+gold+"</li>");
            $("#status ol li").css('color', 'red');
            $("#total-gain ol").append("<li>/&nbsp;Casino&nbsp;/&nbsp;0&nbsp;</li>");
            $("#total-loss ol").append("<li>/&nbsp;Casino&nbsp;/&nbsp;"+gold+"</li>");
            $("#total-loss p").text(loss);}
        } else {alert("Game Over!");
        $(".numtry").text(0);
        }
    });

  
   







});