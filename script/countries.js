const getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => showCountries(countries))
        .catch(error => console.log(error))
}
// console.log('I am here all countries');

const showCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <img class="flags" src="${country.flags.png}" alt="">
        <h4>Official Name: ${country.name.official}</h4>
        <h5>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h5>
        <button onclick="countryDetails('${country.cca2}')">Detail</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}
const countryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('Show Country Details', url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetails(data))
        .catch(error => console.log(error))
}
const displayCountryDetails = cDetails => {
    console.log(cDetails);
    const countryDetails = document.getElementById('country-detils');
    countryDetails.innerHTML = `
    <h2>${cDetails[0].capital}</h2>
    <h2>${cDetails[0].continents}</h2>
    <img src="${cDetails[0].flags.png}"</img>
    `;


    // console.log(country)
}


getCountries();