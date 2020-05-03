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
      responseObject.syllabusData[i].info + '" />';
      newLine += '<p><b>' + responseObject.syllabusData[i].header + '</b><br>';
     
    }

    // Update the page with the new content
    document.getElementById('Content_area').innerHTML = newContent;

  //}
};

xhr.open('GET' , 'https://kadotaterry.github.io/WebDevFinal/syllabus.json', true);
xhr.send(null);
