const getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => showCountries(countries))
}
// console.log('I am here all countries');

const showCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h4>Common Name: ${country.name.common}, Official Name: ${country.name.official}</h4>
        <img class="flags" src="${country.flags.png}" alt="">
        <p></p>
        <p></p>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}


getCountries();