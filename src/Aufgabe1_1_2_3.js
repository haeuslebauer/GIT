/*Aufgabe 1)

Implementieren Sie eine JavaScript Funktion die einen String umkehrt.

Beispiel: aus "javascript" wird "tpircsavaj" 
 */
/* Option 1*/
var string = "";
function umkehren(){
	string.reverse();
}
alert (umkehren(javascript));

/*Aufgabe 2) 
Implementieren Sie eine JavaScript Funktion, welche erkennt, ob ein Jahr ein Schaltjahr ist.
Sie erkennen ein Schaltjahr anhand der folgenden Regeln:
- Die durch 4 ganzzahlig teilbaren Jahre sind Schaltjahre. 
- Jahre, die ein Jahrhundert abschliessen (z. B. 1800, 1900, 2100 und 2200) sind keine Schaltjahre.
- Die durch 400 ganzzahlig teilbaren Jahre sind doch Schaltjahre. 
Bspw. ist 1997 ein Schaltjahr, aber 1996 nicht. 1900 ist ein Schaltjahr, 2000 nicht. */

/*Kommentar: 2000 ist doch ein Schaltjahr? Und ein Schaltjahr ist doch einfach immer durch 4 ohne Rest teilbar*/
var jahr ="";
function Schaltjahr(){
	if(jahr%4 == 0 && jahr>0 ){
		return true;
	}
	else {
		return false;
	}
}

confirm(Schaljahr());

/* Aufgabe 3)
Schreiben Sie eine JavaScript Funktion, die erkennt, ob ein Satz ein Pangramm ist.
Ein Pangramm ist ein Satz, welcher jeden Buchstaben des Alphabets mind. einmal benutzt.
Das bekannteste Pangramm im Englischen ist: The quick brown fox jumps over the lazy dog.
Das Alphabet benutzt nur die ASCII-Zeichen a-z. Gross-/Kleinschreibung muss nicht unterschieden werden. */
var buchstaben = "abcdefghijklmnopqrstuvwxyz"
function Pangramm(){
	  for (var i = 0; i < buchstaben.lenght; i++)
	   /* if {
		return false
		} else {
	    return true
		}
	} */
	/*keine Ahnung, welche 