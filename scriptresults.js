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

// const p=  document.getElementById('userInputs'); //u dont need this for later
// p.innerText = user_inputs + '         filter: ' + filter; //nor this, just a demo
// console.log(user_inputs);
sessionStorage.clear();

//-------------------------------------Getting json data and using it---------------------------------------------------------//

const resultContainer = document.querySelector('.result_container');
let preveiwContainer = document.querySelector('.recipe_preview');


fetch("lebanesefood.json").then(function(response){
  return response.json();
}).then(function (object){
  object.forEach(recipes =>{
      // console.log(recipes.recipe); //write ur code here baaden delete hawde lconsole.log
      // console.log(recipes.calories);

      //everything related to the result
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

      //resultsClicked
      const recipeClicked = document.createElement('div');
      recipeClicked.className = 'preview';
      const imgClicked = document.createElement('img');
      imgClicked.src = recipes.image;
      const exitButton = document.createElement('button');
      exitButton.className = "xButton";
      exitButton.innerText = "X";
      recipeClicked.appendChild(exitButton);
      recipeClicked.setAttribute('data-target', `${recipes.recipe}`);
      recipeClicked.appendChild(imgClicked);
      const instructionsDiv = document.createElement('div');
      instructionsDiv.innerText = `${recipes.instructions}`;
      recipeClicked.appendChild(instructionsDiv);
      preveiwContainer.appendChild(recipeClicked);


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
      let previewBox = preveiwContainer.querySelectorAll('.preview'); 
      document.querySelectorAll('.result_container .recipe').forEach(product =>{
        product.onclick = () =>{
          preveiwContainer.style.display = 'flex';
          let name = product.getAttribute('data-name');
          previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            console.log("akel");
            if(name == target){
              preview.classList.add('active');
            }
          });
        };
      });
      
      previewBox.forEach(close =>{
        close.querySelector('.xButton').onclick = () =>{
          close.classList.remove('active');
          preveiwContainer.style.display = 'none';
        };
      });


  });
})

//------------------------------------JS for the div prevs (appear/hide)-----------------------------------------//




//--------------------------------------------------------------------------------------------------------------//
