

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

function test() {
	console.log("Page change");
	location.href = 'results.html';
}

function test2() {
	console.log("Page load");
	var request = makeHttpObject();
	request.open("GET", "https://api.idolondemand.com/1/api/sync/analyzesentiment/v1?text=I+am+really+annoyed+with+your+poor+performance+recently&language=eng&apikey=d00696e1-ec9b-44e1-8265-591b852e5f0f", true);
	request.send(null);
	request.onreadystatechange = function() {
	  if (request.readyState == 4)
	    document.getElementById("result_text").innerHTML = request.responseText;
	};
}

// get sentiment analysis on a string
//"https://api.idolondemand.com/1/api/sync/analyzesentiment/v1?text=INSERT+TEXT+HERE&language=eng&apikey=d00696e1-ec9b-44e1-8265-591b852e5f0f"

//categorize a string
//"https://api.idolondemand.com/1/api/sync/categorizedocument/v1?text=INSERT+TEXT+HERE&apikey=d00696e1-ec9b-44e1-8265-591b852e5f0f"
//apparently only works with wikipedia and the news. Can we make it work with our Parse database?

//entity extraction
//"https://api.idolondemand.com/1/api/sync/extractentities/v1?text=INSERT+TEXT+HERE&entity_type=ENTITY_TYPE&apikey=d00696e1-ec9b-44e1-8265-591b852e5f0f"
//ENTITY TYPES: https://www.idolondemand.com/developer/apis/extractentities#request

//expand terms
//"https://api.idolondemand.com/1/api/sync/expandterms/v1?text=INSERT+TEXT+HERE&expansion=EXPANSION_TYPE&sort=SORT_TYPE&apikey=d00696e1-ec9b-44e1-8265-591b852e5f0f"
//EXPANSION AND SORT TYPES: https://www.idolondemand.com/developer/apis/expandterms#request
