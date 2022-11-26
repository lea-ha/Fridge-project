const ingredientsList = document.querySelector('.results_list');
const ingredientsDiv = document.querySelector(".Div_results");
const searchInput = document.querySelector("#new_single_ingredient");

let resultsSet = new Set();

fetch("lebanesefood.json").then(function(response){
  return response.json();
}).then(function (object){
  //console.log(object);
  object.forEach(recipes =>{
      recipes.ingredients.forEach(ingr =>{
        resultsSet.add(ingr);
      });
  })
  const results = Array.from(resultsSet);
  results.sort(); //find an optimal solution
  for(let x=0; x<results.length; x=x+1){

  let li = document.createElement('li');
  li.className= "listItem" ;
  li.textContent = results[x];
  ingredientsList.appendChild(li);
  li.appendChild(createCheckbox('liCheckbox'));

  }

  searchInput.addEventListener("input", e => {

    const ingredientItems = document.querySelectorAll('.listItem'); 
    for(let y=0; y<ingredientItems.length; y=y+1){
      const value = e.target.value.toLowerCase();
      //console.log(value);
      const isVisible = results[y].toLowerCase().includes(value);
      //console.log(isVisible);
      ingredientItems[y].classList.toggle("hide", !isVisible);
    }
})


//saving the user's input
const allCheckboxes = document.querySelectorAll(".liCheckbox");
let selectFilterOptions = document.querySelector('#select_options');


for(let x=0; x<allCheckboxes.length; x++){
allCheckboxes[x].addEventListener('click', ()=>{
  const checkboxInnerText = allCheckboxes[x].parentElement.innerText;
  if(allCheckboxes[x].checked){
    if(!sessionStorage.getItem(checkboxInnerText)){
      sessionStorage.setItem(checkboxInnerText,checkboxInnerText);
    }
  }
  else{
    if(sessionStorage.getItem(checkboxInnerText)){
      sessionStorage.removeItem(checkboxInnerText);
    }
  }
})
}

let filterOption = 'Calories';
sessionStorage.setItem('FilterOpt', filterOption);

selectFilterOptions.addEventListener('change',e =>{
filterOption = e.target.value;
sessionStorage.setItem('FilterOpt', filterOption);
  //it's in the same 'array' as the ingredients
 })

})


function createCheckbox(checkboxClass){
  let checkbox = document.createElement('input');
  checkbox.type='checkbox';
  checkbox.className=checkboxClass;
  return checkbox;
}
 

