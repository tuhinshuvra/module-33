


const getMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">            
               <h5 class="card-title">Name- ${meal.strMeal}</h5>
               <p class="card-text">Meal ID-${meal.idMeal}, Area- ${meal.strArea}, Category- ${meal.strCategory}</p>
               <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
           </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}

const searchMeal = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    getMeals(searchText);
    searchField.innerHTML = ''
}

const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = detail => {
    // console.log(mealDetail);
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
    <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${detail.strMeal}</h5>
              <p class="card-text">{Some quick example the card's content.}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
    `;
    detailContainer.appendChild(detailDiv);
}

getMeals('');