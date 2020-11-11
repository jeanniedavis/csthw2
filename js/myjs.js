 $(document).ready(function() {
     fillColor("white",0);
    $("#play").on("click", function(){
         $("#gameFdbck").html("");
        randomBoard();
})   
 });
 var answer;

function fillBoard(color) {
        var counter = 0;
        $("#gameboard").html("");
        for (var i = 0; i < 3; i++) {
            var row = $("<div></div>")
            row.addClass("row");
            for (var j = 0; j < 3; j++) {
                var box = $("<div></div>")
                box.addClass("box");
                box.attr("id",counter);
                box.css("background",color[counter]);
                row.append(box);
                initBox(box);
                counter++;
            }               
            $("#gameboard").append(row);
        }
}
function fillColor(color,position){
    var blank=[];
    for (var i=0; i<9; i++){
        if(i==position){
        blank.push(color);
        }
    else {
        blank.push("white");
    }
    }
    fillBoard(blank);
}
function randomBoard() {
    var color ="plum";
    var position= Math.floor(Math.random()*10);
    fillColor(color,position);
    answer=position;
    setTimeout(function(){ fillColor("white",0); }, 1000);
}
function initBox(el){
    el.on("click",function(){
        if ($(this).attr("id") == answer){
            $("#gameFdbck").html("Congrats! You won!");
            $(this).css("background","plum");
            $("#gameFdbck").css("color", "gold");
            $("#gameFdbck").css("font-size", "20px");

        }
        else {
            $("#gameFdbck").html("Sorry! Try again");
            $(this).css("background","red");
            $("#gameFdbck").css("color", "red");
            $("#gameFdbck").css("font-size", "20px");
        }
    })
}