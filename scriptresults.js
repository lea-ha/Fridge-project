let user_inputs=[]; //it contains the user's ingredients
let filter=localStorage.getItem('FilterOpt');
let idx = 0;
for(let i=0; i<localStorage.length; i=i+1){
    if(localStorage.key(i)!=='FilterOpt'){
        user_inputs[idx] = localStorage.key(i);
        idx=idx+1;
    }
}

const p=  document.getElementById('userInputs');
p.innerText = user_inputs + '         filter: ' + filter;

localStorage.clear();

console.log(user_inputs[0]);
