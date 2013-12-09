"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	// Skapat varijabel
	var adam = 10;
	
	//retunerat variabeln
	return adam; 
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	// Skapat två variabler
	var tal1 = 2.5;
	var tal2 = 8;
	//multiplicerar variablerna
	var resultat = tal1 * tal2;
	// returnerar resultatet för att få ut produkten
	return resultat;

}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	//satt tal1 minus tal2 och det blir lika med resultatet
	var resultat = tal1 - tal2;
	//retunerat resultatet av tal1 - tal2
	return resultat;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	//variabel för att ha något att köra retur på
	
	var math = Math.round (tal);
	
	//retur på variablen math
 	return math;
	
	
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	// För att retunera längden på variablen "text"
	return text.length;
	
	
	

	
	
	
	
	
	
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	//  för att ge text en varibel och få ut näst sista bokstaven
	var last = text.charAt (text.length-2);
	return last;
	
	
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	//för att göra det till en sträng så har jag plusat ihop dom i en ", " för att få fram ett kolon
	return surname+", "+firstname;
	

	
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	// söker fram det sista mellanslaget
	var ord = words.lastIndexOf(" ");
	// sen tar jag ord+1 för att få fram sista ordet
 	var lastword =  words.substr (ord+1);
	return lastword;
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	//en if om number är större eller lika med så ska den retuneras som true
	if(number >= 100){
	return true;
	//annars ska den retuneras som false
	} else { 
	return false;
	}
	
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {
	// Börjar med en OR för att det räcker att en är sant för att den ska gå vidare
	if(epost.length ==0 || namn.length ==0)
	{ 
	return "Du har glömt att ange namn eller e-post"
	}
	// om det inte är något snabel a i epost fältet så ska den gå vidare till "Ditt meddelande skickas"
	else if(epost.indexOf("@")<0) 
	{ 
	return "Ange en e-postadress";
	} 
	else 
	{ return "Ditt meddelande skickas"; }
}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
	
	// för att få fram det mittersta värdet så gör jag en math.round och tar längeden på arr och delar den på mitten.
	var tal = Math.round(arr.length /2);
	// och retunerar sedan tal-1 för att få fram det mittersta
	return arr[tal-1];
						   
	
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
	// börjar med att göra en variabel för summan
	var summa = 0;
	//en for-loop för att få ut alla värden ut arr
	for(var i = 0; i < arr.length; i++){
	//lägger ihop värderna som jag får ut ur arr
	summa = summa + arr[i]; 
	}
	// retunerar sedan summan och delar den på antalet i arr för att få ut medelvärdet
	return summa/arr.length;
	
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post" 
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

