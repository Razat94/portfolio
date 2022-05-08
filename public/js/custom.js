/* 
Code to load multiple JS files in the <head> section
Please note that this will only work for the main home & about page due to the file structure.
*/

$(document).ready(function(){ 
  // console.log("test to assure Jquery is loaded");
  
  /* list of JS scripts */
  const scriptSrcs = [
    "./vendor/popper/popper.js",
    "./vendor/bootstrap/js/bootstrap.min.js"
  ];

  for (var i = 0; i < scriptSrcs.length; i++) { 
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute("type","text/javascript");
    scriptElem.setAttribute("src", scriptSrcs[i]);
    document.head.appendChild(scriptElem);
  };

})

/* 
Current Output in Head:
	<script src= "./vendor/popper/popper.js"></script>
	<script src= "./vendor/bootstrap/js/bootstrap.min.js"></script>
*/

/*
List of the same scripts online:

  Bootstraps Default jquery:
	<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>	 
	Popper.min.js:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	Bootstrap JS:
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
*/

/* Resources */
/* https://stackoverflow.com/questions/9413737/how-to-append-script-script-in-javascript */
/* https://stackoverflow.com/questions/6371070/how-to-load-multiple-javascript-files-inside-html-page */
