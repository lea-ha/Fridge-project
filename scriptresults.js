//---------------------------------------Getting the user's input------------------------------------------//
let user_inputs=[]; //it contains the user's ingredients
let filter=sessionStorage.getItem('FilterOpt');
let idx = 0;
for(let i=0; i<sessionStorage.length; i=i+1){
    if(sessionStorage.key(i)!=='FilterOpt'){
        user_inputs[idx] = sessionStorage.key(i).toLowerCase();
        idx=idx+1;
    }
}

sessionStorage.clear();

//-------------------------------------Getting json data and using it---------------------------------------------------------//

const resultContainer = document.querySelector('.result_container');
let previewContainer = document.querySelector('.recipe_preview');
const searchInp = document.querySelector('#search_recipe');


fetch("lebanesefood.json").then(function(response){
  return response.json();
}).then(function (object){
  object.forEach(recipes =>{

      //everything related to the result, creating the DOM
      const recipe = document.createElement('div');
      const h3 = document.createElement('h3');
      recipe.className="recipe";
      recipe.setAttribute('data-name', `${recipes.recipe}`);
      h3.innerText = `${recipes.recipe}`;
      const img = document.createElement('img');
      img.src=recipes.image;
      recipe.appendChild(h3);
      recipe.appendChild(img);
      resultContainer.appendChild(recipe);

      //everything related to resultsClicked, creating the DOM
      const recipeClicked = document.createElement('div');
      recipeClicked.className = 'preview';

      const calories = document.createElement('h4');
      calories.innerHTML= `<b>Calories: </b>${recipes.calories} Cal`;

      const title = document.createElement('h3');
      title.innerText = `${recipes.recipe}`;

      const imgClicked = document.createElement('img');
      imgClicked.src = recipes.image;

      const exitButton = document.createElement('button');
      exitButton.className = "xButton";
      exitButton.innerHTML = "&times";

      const ingredientsList = document.createElement('p');
      ingredientsList.className = "ingr_list";
      ingredientsList.innerHTML = `<b>Ingredients :</b> ${recipes.ingredients}`;

      recipeClicked.appendChild(exitButton);
      recipeClicked.setAttribute('data-target', `${recipes.recipe}`);
      recipeClicked.appendChild(imgClicked);
      recipeClicked.appendChild(title);
      recipeClicked.appendChild(calories);
      recipeClicked.appendChild(ingredientsList);

      const instructionsDiv = document.createElement('div');
      instructionsDiv.className = "instructions_div";
      const ol = document.createElement('ol');
      ol.className = "instructions_list";
      recipes.instruction.forEach(instr =>{
        const li=document.createElement('li');
        li.innerText = instr;
        ol.appendChild(li);
      });
      instructionsDiv.innerText="Instructions:"
      instructionsDiv.appendChild(ol); 
      recipeClicked.appendChild(instructionsDiv);
      previewContainer.appendChild(recipeClicked);


      const recipeIngredients = new Set();
      for(let i=0; i<recipes.ingredients.length; i=i+1){
        recipeIngredients.add(recipes.ingredients[i]);
      }
      // console.log("ingredients of each recipe = ", recipeIngredients);
      // console.log("User input = ", user_inputs);
      function hide(){
        let count = 0;
        for(let i=0; i<user_inputs.length; i=i+1){
          // console.log("user input = ", user_inputs[i]);
          // console.log(recipeIngredients.has(user_inputs[i]));
          if(recipeIngredients.has(user_inputs[i])){

             count = count + 1;
          }
          //console.log(count);
        }
        //console.log(count);
        if(count === 0){
          return true;
        }
        return false;
      }

      if(hide()){
        recipe.classList.add('hide');
      }  
      let previewBox = previewContainer.querySelectorAll('.preview'); 
      document.querySelectorAll('.result_container .recipe').forEach(product =>{
        product.onclick = () =>{
          previewContainer.style.display = 'flex';
          let name = product.getAttribute('data-name');
          previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
              preview.classList.add('active');
            }
          });
        };
      });
      
      previewBox.forEach(close =>{
        close.querySelector('.xButton').onclick = () =>{
          close.classList.remove('active');
          previewContainer.style.display = 'none';
        };
      });

      searchInp.addEventListener("input", e => {

          const str = recipes.recipe;
          console.log(str);
          const value = e.target.value.toLowerCase();
          //console.log(value);
          const isVisible = str.toLowerCase().includes(value);
          //console.log(isVisible);
          recipe.classList.toggle("hide2", !isVisible);
        
    })


  });
})

//------------------------------------JS for the div prevs (appear/hide)-----------------------------------------//




//--------------------------------------------------------------------------------------------------------------//
