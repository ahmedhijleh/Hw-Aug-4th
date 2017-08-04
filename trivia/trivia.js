
var correct=0;
var wrong=0;
var playgame=false;
var gamestart;

var questions['what is the highest rated movie all time?','one of these actors never got an oscar?','All of these superheroes is from Marvel comics except?','which actor won the most oscars?','most successful sitcom all time ?'];

var answers['shawshank redemption','johnny depp','batman','jack nicklson','friends'];


$("#start").on("click", stopwatch.start);
var clockRunning = false;
$("#timer").html("00:00");

for (var i=0;i<questions.length;i++)
{
	if (questions[i]&&answers[i])
		correct++;
}
}
 if (!playgame) {
        gamestart = setInterval(stopwatch.count, 1500);
        playgame = true;
    }

$.each(questions,function(key,value))
{
	correct++;
else
{
	wrong++;

}


});
$("input[type=radio[name=q1]:checked").val();
$("input[type=radio[name=q2]:checked").val();
$("input[type=radio[name=q3]:checked").val();
$("input[type=radio[name=q4]:checked").val();
$("input[type=radio[name=q5]:checked").val();


function(reset)
{
	correct=0;
	wrong=0;
	playgame=false;
	gamestart=0;


}