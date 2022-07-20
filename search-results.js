
var imageEl = document.querySelectorAll('.image');
var descriptionEl = document.querySelectorAll('.description');
var titleEl = document.querySelectorAll('.title');


var searchEl = document.querySelector('#searchTerm');
// Temporary query term
var topic = document.getElementById('topic').textContent
var format = 'photos/'

// var queryString = document.location.search
// var format = queryString.split('=')[1];




// var govRepoWebsite = 'https://www.loc.gov/?q=' + topic + '&fo=json';

var govRepoWebsite = 'https://www.loc.gov/'+format+ '?q=' + topic + '&fo=json';
console.log(govRepoWebsite)

var govAPIFetched = fetch(govRepoWebsite)
.then(function (response) {
    if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
        });
    } else {
        alert('Error')
    }
})

console.log("testiandsf;ad")
console.log(govAPIFetched)

// console.log(imageEl[0].dataset.src)

function renderTopicCards() {

    imageEl[0].dataset.src == ''


};





// var getGovRepos = function (topic) {
//     var govRepoWebsite = 'https://www.loc.gov/?q=' + topic + '&fo=json';

//     fetch(govRepoWebsite)
//         .then(function (response) {
//             if (response.ok) {
//                 console.log(response);
//                 response.json().then(function (data) {
//                     console.log(data);
                    
//                 });
//             } else {
//                 alert('Error')
//             }

//         })
// }
// console.log(getGovRepos);