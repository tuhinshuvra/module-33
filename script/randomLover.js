


const loadLovers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayLovers(data.results))
}

const displayLovers = lovers => {
    const loverContainer = document.getElementById('lover-container');
    for (let lover of lovers) {
        console.log(lover);
        const loverDiv = document.createElement('div');
        loverDiv.classList.add('lover');
        loverDiv.innerHTML = `
        <div style="display:flex, justify-content:space-between">
        <h4> Name: ${lover.name.title} ${lover.name.first} ${lover.name.last}, Gender: ${lover.gender}</h4>
        <img src="${lover.picture.large}" alt="">
        </div>
        <p>Email: ${lover.email}</p>
        <p>Location: city-${lover.location.city}, state-${lover.location.state}, country-${lover.location.country},
         postcode-${lover.location.postcode}</p>
        `;

        loverContainer.appendChild(loverDiv);
    }
}
// { gender: 'male', name: {… }, location: {… }, email: 'jonathan.leon@example.com', login: {… }, … }
// name: {title: 'Mr', first: 'Tristan', last: 'Clark'}
// location: {street: {…}, city: 'Korsvik', state: 'Bergen', country: 'Norway', postcode: '8852', …}

loadLovers();