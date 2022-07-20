let searchForm = document.querySelector('#search-input');
let resultFormat = document.querySelector('#format-dropdown');
let searchBtn = document.querySelector('#search-btn');

let searchTerm = searchForm.value.trim();
let formatChoice = resultFormat.value; // is this wrong? could be

/* 
step one: check that a search value has been entered

step two: check that a format has been chosen

step three: set apiURL using search query and chosen format, if any

step four: send to search results page using URL with search query and chosen formats

*/

let formSubmitHandler = function(event) {
    event.preventDefault();

    if (searchTerm && formatChoice) {
        goSearchPage(searchTerm);
    } else {
        alert('Please enter a search term');
    }
};

let goSearchPage = function () {
    let apiURL = 'https://www.loc.gov/search/?q=' + searchTerm + '&fo=' + formatChoice;

    fetch(apiURL).then(function () {
        location.replace('href', './search-results.html?q=' + searchTerm + '&format=' + formatChoice);
    })

}

searchBtn.addEventListener('click', formSubmitHandler);