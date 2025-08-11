function input(val){

  let userInput = document.getElementById('display')
  userInput.value += val;

}
 function calculate(){
  let userInput = document.getElementById('display').value;

 document.getElementById('display').value=eval(userInput);
 
}
 function clearValue(){
   document.getElementById('display').value = null;
}