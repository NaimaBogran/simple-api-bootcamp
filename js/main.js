//user will be able to enter either an ingredient or a meal

//if ingredient is entered, api will grab any recipe with that ingredient or for a meal it'll grab the meals recipe

//user will click on a button to get result

//recipes will apear in DOM

//i want the display to look different based on whether the user entered an ingredient or a meal

// document.querySelector('button').addEventListener('click', getFood)

// function getFood(){
//     const input = document.querySelector('#enterIngredient').value
//     console.log(input)
    
//     if(!input){
//         console.log('Enter an Ingredient')
//     }
    
//     const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`

//     fetch(url)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)
    
//         const results = document.querySelector('#results').innerText = `` //clears old results
//         document.querySelector('#results').innerText = data.meals[0].strMeal
//         document.querySelector('img').src = data.meals[0].strMealThumb
        
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }


document.querySelector('button').addEventListener('click', getFood)

function getFood() {
  const input = document.querySelector('#enterIngredient').value
  const results = document.querySelector('#results')
  results.innerHTML = '' // clear old results

  if (!input) {
    results.innerText = 'Please enter an ingredient.'
    return
  }

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if (!data.meals) { 
            results.innerText = `No recipes found for "${input}".` 
            return
        }
      data.meals.forEach(meal => {//taken from chatgpt to get array to show fully
        const mealCard = document.createElement('div')
        mealCard.classList.add('meal-card')

        const img = document.createElement('img')
        img.src = meal.strMealThumb
        img.alt = meal.strMeal

        const name = document.createElement('h4')
        name.innerText = meal.strMeal

        
        mealCard.appendChild(name)
        mealCard.appendChild(img)
        results.appendChild(mealCard)
      })
    })
    .catch(err => {
      results.innerText = `Error: ${err}`
    })
}