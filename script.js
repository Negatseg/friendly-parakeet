// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const lower = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,,u,v,w,x,y,z,'];
const upper = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,'];
const numbers = [1,2,3,4,5,6,7,8,9,0,];
const symbols = ["!,@,#,$,%,^,&,*,(,),?,>,<,=,+,-,_"];
const passwordLength= document.getElementById('length')

function generatePassword(lower,upper,numbers,symbols){
  
  const lowerCases =confirm(" would you like to include lower cases?")
  const upeerCases =confirm(" would you like to include upper cases?")
  const numeric= confirm (" would you like  to include numberic values?")
  const chars= confirm(" would you like to include lower special characters?")

  let password = "";
  for (var i=0; i <passwordLength; i++) {
    let randomNumber = Math.floor(Math.random()* passwordLength.length);
      password+= lower.substring(randomNumber, randomNumber + 1);
      password+= upper.substring(randomNumber, randomNumber + 1);
      password+= numbers.substring(randomNumber, randomNumber + 1);
      password+= symbols.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById('password').value = password;

  console.log(password);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return;"password";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


