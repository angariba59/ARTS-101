let count = 0;
let colorIndex = 0;
let mood;
let, colors=["Orchid", "Coral", "HotPink","Plum" ]
$("#needy-button").click ( function() {
if (count<5) { mood = "fresh and Happy";}
else if (( count >= 5)) && (count < 10)) {mood = "Keep Pushing";}
else { mood = "so tired"}
$ ("#needy-button").html ("CLicks" + count +"" +colors[count] );
 count = count + 1;
 $("#needy-button").html("You clicked me + count +"times");
 });