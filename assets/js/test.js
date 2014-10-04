

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