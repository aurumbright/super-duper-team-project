A form with a text input field to capture a search query and an option select dropdown to capture the format of the search query. 
The options in the dropdown should be a list of the possible format values listed in the [Library of Congress API documentation on requests]
(https://libraryofcongress.github.io/data-exploration/requests.html#format).


* A browser event listener attached to the form to execute a function on submission, 
which will capture both form values and redirect the user to a search results page with those values included in the URL as query parameters. 
This will use the browser's `location.replace()` method.

listen for click of submit button attached to id/class
attach a function on click, grab data and store data in redirect url as query parameters

var formValues = document.getElementById("formValues")

const submit = document.getElementById("btn");
submit.addEventListener("click", function redirectUser() {
    
    if (formValues !=== null ) {
      .then(window.location.replace(LinkURL));
    } else {
        window.location.replace("http/search-results.html?q=dogs&format=");
    }
  }
  

  var LinkURL = function lURL(){
    function returnData() {
        let input = document.getElementById("userInput").value;
        return input;
    }

  }
  // Add event listener 


* If there is no format selected from the dropdown, the URL should look something like the following example:

  ```http
  /search-results.html?q=dogs&format=
  ```

* If there is a format selected from the dropdown, the URL should look something like the following example:

  ```http
  /search-results.html?q=dogs&format=photos
  ```