const loadUserFetch = () => {


    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url).then(resposne => resposne.json()).then(users => displayUser(users.results[0]))
}


const loadUserAsync = async () => {
    const url = 'https://randomuser.me/api/?gender=female';
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayUser(data.results[0])
    }
    catch (error) {
        console.log(error);
    }
}

const displayUser = (users) => {
    console.log(users);
}