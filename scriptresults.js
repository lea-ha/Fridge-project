//---------------------------------------Getting the user's input------------------------------------------//
let user_inputs=[]; //it contains the user's ingredients
let filter=sessionStorage.getItem('FilterOpt');
let idx = 0;
for(let i=0; i<sessionStorage.length; i=i+1){
    if(sessionStorage.key(i)!=='FilterOpt'){
        user_inputs[idx] = sessionStorage.key(i);
        idx=idx+1;
    }
}

const p=  document.getElementById('userInputs'); //u dont need this for later
p.innerText = user_inputs + '         filter: ' + filter; //nor this, just a demo
console.log(user_inputs);
sessionStorage.clear();

//-------------------------------------Getting json data and using it---------------------------------------------------------//

fetch("lebanesefood.json").then(function(response){
  return response.json();
}).then(function (object){
  console.log(object);
  object.forEach(recipes =>{
      console.log(recipes.recipe); //write ur code here baaden delete hawde lconsole.log
      console.log(recipes.calories);
  })
})

//------------------------------------JS for the div prevs (appear/hide)-----------------------------------------//
let preveiwContainer = document.querySelector('.recipe_preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.result_container .recipe').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
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
    preveiwContainer.style.display = 'none';
  };
});
//--------------------------------------------------------------------------------------------------------------//
