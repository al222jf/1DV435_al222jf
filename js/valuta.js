// JavaScript Document: Valuta omvandlaren!

	var svar = document.getElementById('svar');


function calc(valuta) {
	var dollar = 6.89;
	var euro = 9.46;
	var resultatdollar;
	var resultateuro;
	
		if (valuta > 0) {
				resultatdollar = Math.round((valuta/dollar)*100)/100;
				resultateuro = Math.round((valuta/euro)*100)/100;
			
			}

			if (isNaN(valuta)) {
				svar.innerHTML = "<p>  Du får bara använda siffror! </p>"+ svar.innerHTML;
				
				} else if (valuta <= 0) { 
					svar.innerHTML = "<p>  Du måste skriva in några siffor! </p>"+ svar.innerHTML;	

				} else {

					svar.innerHTML = " <p>" + " svenska kronor blir " + resultateuro + " euro och " + resultatdollar + " dollar" + "</p>"+ svar.innerHTML;
				}


}

