// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newLine = '';
    for (var i = 0; i < responseObject.syllabusData.length; i++) { // Loop through object
	  newLine += '<b>' + responseObject.syllabusData[i].summary + '</b>';
	  newLine += '<p>' + responseObject.syllabusData[i].line1 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line2 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line3 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line4 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line5 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line6 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line7 + '</p>';
	   newLine += '<b>' + responseObject.syllabusData[i].header2 + '</b>';
	  newLine += '<p>' + responseObject.syllabusData[i].line8 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line9 + '</p>';
	  newLine += '<p>' + responseObject.syllabusData[i].line10 + '</p>';
	  
	  
    }

    // Update the page with the new content
    document.getElementById('helpme').innerHTML = newLine;

  //}
};

xhr.open('GET' , 'https://kadotaterry.github.io/WebDevFinal/data/syllabus.json', true);
xhr.send(null);
