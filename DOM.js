function generateNumber(){
let user = document.getElementById('number').value;
for(i=2;i<user;i++){
if(user % 2 === 0){
  document.getElementById('anwer').innerHTML = (`your number ${user} is not prime`);
}
else if(user % 2 !== 0){
  document.getElementById('anwer').innerHTML = (`your number ${user} is prime`);
}
else if(user % 2 === 0 || user !== 0){
  document.getElementById('anwer').innerHTML = ("i dont understand");
}
else{
  alert("try again");
}
}
}
generateNumber();
/////////////////////////////////////////////////////////////
