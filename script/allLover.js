

const getLover = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayLovers(data.results))
}

const displayLovers = lovers => {
    const loverContainer = document.getElementById('all-lover');

    for (const lover of lovers) {
        console.log(lover);
        const loverDiv = document.createElement('div');
        loverDiv.classList.add('lover');
        loverDiv.innerHTML = `
        <img src="${lover.picture.large}" alt="">
        <h4>Name: ${lover.name.title} ${lover.name.first} ${lover.name.last}, Gender: ${lover.gender}</h4>
        <p>Email: ${lover.email}</p>
        <p>Phone: ${lover.phone}</p>
        `
        loverContainer.appendChild(loverDiv);
    }
}

getLover();