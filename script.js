let Input = document.querySelector("input")
let Output = document.querySelector("#result")
let button= document.querySelector("button")

function replace_punctuation_Space (str){
  const regex = /[\p{P} \s]/gu;
    return str.replace(regex, "")
  }
button.addEventListener("click",(e)=>{
  e.preventDefault();
  let Text =  replace_punctuation_Space (Input.value);
  Text = Text;
  let reversedText = Text.split('').reverse().join("");
  if(Text === ""){
   alert("Please input a value")
  } else if (Text.localeCompare(reversedText, 'en-US', { sensitivity: 'base' }) === 0){
  Output.innerHTML = `<strong>${Input?.value}</strong> is a palindrome.`;
  }else{
  Output.innerHTML =  `<strong>${Input?.value}</strong> is not a palindrome.`
}})  