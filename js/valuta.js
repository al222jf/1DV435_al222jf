// JavaScript Document: Valuta omvandlaren!

	var lista = document.getElementById('svar');
	var listaa;

function calc(text) {
	var dollar = 6.89;
	var euro = 9.46;
	var resultatdollar;
	var resultateuro;
	
	var totaldollar = [];
	var totaleuro = [];
	var totalsek = [];

	if (isNaN(text)) {
			lista.innerHTML = "Du får bara använda siffror!";
	}
	
if (text > 0) {
		resultatdollar = Math.round((text/dollar)*100)/100;
		resultateuro = Math.round((text/euro)*100)/100;
		totaldollar.push(resultatdollar);
		totaleuro.push(resultateuro);
		totalsek.push(text)
		
		console.log (totalsek, totaldollar, totaleuro);
	
	
}
 	
 	lista.appendChild(document.createTextNode(totalsek + " svenska kronor blir " + totaleuro + " euro och " + totaldollar + " dollar"));
	lista.appendChild(document.createElement('p'));
	

 

}

