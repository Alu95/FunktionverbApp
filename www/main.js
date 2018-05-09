var words = ["zur Rechenschaft",
	"in Betracht",
	"in Zweifel",
	"Nutzen ... aus",
	"Konsequenzen", //ziehen
	"Verantwortung",
	"Rechnung",
	"Sorgen/Bedenken",
	"zur Schau",
	"Schuld",
	"Kosten", //tragen
	"in Aussicht",
	"(stehen)	zur Schau",
	"zur Diskussion",
	"zur Rede",
	"in Rechnung",
	"Fragen/in Frage",
	"Antrag	",
	"(zur) Bedingung(en)", //stellen(stehen)
	"(zur) Antwort",
	"Auftrag",
	"Rat ",
	"recht",
	"Unterricht",
	"Beispiel", //geben
	"zum Schweigen",
	"auf ... Gedanken",
	"zu Ende",
	"in Erinnerung",
	"in Sicherheit",
	"zur Sprache",
	"in Ordnung", //bringen
	"Beschluß",
	"Mut",
	"Fuß", //fassen
	"in Anspruch",
	"Abschied",
	"Platz",
	"Stellung",
	"Rücksicht",
	"in Angriff",
	"Entwicklung", //nehmen
	"Ordnung",
	"Referat/Vortrag",
	"Hof",
	"Abstand",
	"in Schranken",
	"Wort", //halten
	"Untersuchung",
	"Ehe/Krieg",
	"Gespräch/Verhandlung",
	"zu Ende",
	"an der Nase herum", //führen
	"Beruf",
	"Gelegenheit/Chance",
	"Partei",
	"die Flucht",
	"Macht",
	"Maßnahmen", //ergreifen
	"Ersatz",
	"Hilfe",
	"Gesellschaft",
	"Widerstand", //leisten
	"Aufmerksamkeit",
	"Beachtung",
	"Glauben",
	"Vertrauen", //schenken
	"Aufgabe",
	"Leitung",
	"Verantwortung",
	"Auftrag", //übernehmen
	"Kritik", //üben
	"Einfluß",
	"Druck",
	"Wirkung",
	"Beruf", //ausüben
	"Vertrag",
	"Freundschaft",
	"Ehe",
	"Kompromiß", //schließen
	"Beachtung",
	"Anerkennung",
	"Spaß an", //finden
	"zur Sprache/Diskussion",
	"zum Verständnis",
	"zum Halten",
	"zur Sache",
	"in Frage", //kommen
	"in Kenntnis",
	"in Bewegung",
	"ins Recht/Unrecht",
	"in Betrieb/Gang",
	"ins (rechte) Licht",
	"zur Wehr", //setzen  
	"Vorbereitungen",
	"Vereinbarung",
	"Verabredung",
	"Entscheidung", //treffen		 	 

];

$(document).ready(function () {
	"use strict";
	$('#i1').keypress(function (e) {
		if (e.keyCode === 13) {
			$('#b1').click();
		}
	});
});
document.getElementById("b2").onclick = function () {
	"use strict";
	$('#spc1').fadeOut(300);
	f1();
};
document.getElementById("b1").onclick = function () {
	"use strict";
	//$('#spc1').fadeOut(300);
	f2();
};
document.getElementById("b3").onclick = function(){
	"use strict";
	$('#op2').fadeOut(700);
	$('#op1').delay(500).fadeIn(600);
};
document.getElementById("i1").onclick = function(){
	"use strict";
	$('#spc1').fadeIn(300);
};
window.onload = function () {
	"use strict";
	f1();
};
//creare script on load

var randomword;
var correctword;
var currentword;
var errorCount = 0;
var rightCount = 0;
randomword = 1;

function f1() {
	"use strict";
	var rwPast;
	randomword = Math.floor((Math.random() * 97) + 1);
	if (randomword === rwPast) {
		randomword = Math.floor((Math.random() * 97) + 1);
		$('#w1').html(words[randomword]);
		rwPast = randomword;
	} else {
		$('#w1').html(words[randomword]);
		rwPast = randomword;
	}
	$('#d2').html("Wrong: " + errorCount);
	$('#d1').html("Right: " + rightCount);
}

function f2() {
	"use strict";
	currentword = document.getElementById("i1").value.toLowerCase();
	if (randomword >= 0 && randomword <= 4) {
		correctword = "ziehen";
	} else if (randomword >= 5 && randomword <= 10) {
		correctword = "tragen";
	} else if (randomword >= 11 && randomword <= 18) {
		correctword = "stellen";
	} else if (randomword >= 19 && randomword <= 24) {
		correctword = "geben";
	} else if (randomword >= 25 && randomword <= 31) {
		correctword = "bringen";
	} else if (randomword >= 32 && randomword <= 34) {
		correctword = "fassen";
	} else if (randomword >= 35 && randomword <= 41) {
		correctword = "nehmen";
	} else if (randomword >= 42 && randomword <= 47) {
		correctword = "halten";
	} else if (randomword >= 48 && randomword <= 52) {
		correctword = "führen";
	} else if (randomword >= 53 && randomword <= 58) {
		correctword = "ergreifen";
	} else if (randomword >= 59 && randomword <= 62) {
		correctword = "leisten";
	} else if (randomword >= 63 && randomword <= 66) {
		correctword = "schenken";
	} else if (randomword >= 67 && randomword <= 70) {
		correctword = "übernehmen";
	} else if (randomword === 71) {
		correctword = "üben";
	} else if (randomword >= 72 && randomword <= 75) {
		correctword = "ausüben";
	} else if (randomword >= 76 && randomword <= 79) {
		correctword = "schließen";
	} else if (randomword >= 80 && randomword <= 82) {
		correctword = "finden";
	} else if (randomword >= 83 && randomword <= 87) {
		correctword = "kommen";
	} else if (randomword >= 88 && randomword <= 93) {
		correctword = "setzen";
	} else if (randomword >= 94 && randomword <= 97) {
		correctword = "treffen";
	}

	if (currentword === correctword) {
		$('#res1').html("Correct answer. The right answer was '" + correctword + "'");
		$('#res1').css('color', '#81963D');
		rightCount++;
		$('#d1').html("Right: " + rightCount);
		var rwPast;
		randomword = Math.floor((Math.random() * 97) + 1);
		if (randomword === rwPast) {
			randomword = Math.floor((Math.random() * 97) + 1);
			$('#w1').html(words[randomword]);
			rwPast = randomword;
		} else {
			$('#w1').html(words[randomword]);
			rwPast = randomword;
		}
		document.getElementById("i1").value = "";
	} else {
		$('#res1').html("Wrong answer. The right answer is '" + correctword + "'");
		$('#res1').css('color', '#CD5C5C');
		errorCount++;
		$('#d2').html("Wrong: " + errorCount);
	}
}
$('#a').click(function() {"use strict";$('#i1').val($('#i1').val() + "ä"); $('#i1').focus();});
$('#o').click(function() {"use strict";$('#i1').val($('#i1').val() + "ö"); $('#i1').focus();});
$('#u').click(function() {"use strict";$('#i1').val($('#i1').val() + "ü"); $('#i1').focus();});
$('#b').click(function() {"use strict";$('#i1').val($('#i1').val() + "ß"); $('#i1').focus();});
$('#i1').keypress(function (e) {
	"use strict";
	if (e.keyCode === 32) {e.preventDefault();}
	if (e.keyCode === 48) {e.preventDefault();}
	if (e.keyCode >= 53 && e.keyCode <= 57) {e.preventDefault();}
	if (e.keyCode === 49) {e.preventDefault();$('#i1').val($('#i1').val() + "ä");}
	if (e.keyCode === 50) {e.preventDefault();$('#i1').val($('#i1').val() + "ö");}
	if (e.keyCode === 51) {e.preventDefault();$('#i1').val($('#i1').val() + "ü");}
	if (e.keyCode === 52) {e.preventDefault();$('#i1').val($('#i1').val() + "ß");}
});

