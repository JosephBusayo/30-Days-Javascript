const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//empty list to later store state details
const stateList = [];

//fetch the data
fetch(endpoint)
.then(blob => blob.json())
.then(data => stateList.push(...data)) //... is tp spread data into list.Without it array returns a nested array


//Finding matches
function findMatches(wordToMatch, stateList){
    return stateList.filter(place => {
        //converting user input into RegularExpression
        const regex = new RegExp(wordToMatch, 'gi'); //g-global i-insensitive to case

        return place.city.match(regex) || place.state.match(regex)
    })
}


//adding coma to population
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


//displaying matches
function displayMatches(){
    const matchArray = findMatches(this.value, stateList)
    const html = matchArray.map(place => {

        //replace the matched string/word with highlighted text..finished work in css 
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex,
            `<span class="hl">${this.value}</span>`)

        const stateName = place.state.replace(regex,
            `<span class="hl">${this.value}</span>`)

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span> 
            <\li>
        `;
    }).join('');//converst from array of multipleitems to one big string
    suggestions.innerHTML = html;
}



//sesrch for these classes in the html
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);