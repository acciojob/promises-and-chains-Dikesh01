//your JS code here. If required.
const name = document.getElementById('name');
const age= document.getElementById('age');
const button = document.getElementById('btn');

button.addEventListener('click', function(event){
  event.preventDefault();
	let nameValue = name.value;
	let ageValue = age.value;
  if(!(nameValue && ageValue)){
    alert("inputs cannot be empty.");
    return;
  }
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(ageValue > 18){
        alert(`Welcome, ${nameValue} You can vote.`)
      }
      else{
        alert(`Oh sorry ${nameValue} You aren't old enough.`)
      }
    },4000)
  })
  
})