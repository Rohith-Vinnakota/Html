let emailId=document.getElementById("Email");
let password=document.getElementById("password");
let errorMessage1=document.getElementById("error_message1");
let errorMessage2=document.getElementById("error_message2");

function validate(){
  let matchSymbol="@";
if((emailId.value.match(matchSymbol) !="@")&(password.value == "")){
  errorMessage1.style.display="inline-block";
  errorMessage2.style.display="inline-block";
  emailId.style.borderColor="red";
  password.style.borderColor="red";
  return false;
}
else if ((password.value != "")&(emailId.value.match(matchSymbol) !="@")){
  errorMessage2.style.display="none";
  errorMessage1.style.display="inline-block";
  password.style.borderColor="#dddfe2";
  emailId.style.borderColor="red";
  return false;
}
else if ((password.value == "")&(emailId.value.match(matchSymbol) =="@")){
  errorMessage1.style.display="none";
  errorMessage2.style.display="inline-block";
  emailId.style.borderColor="#dddfe2";
  password.style.borderColor="red";
  return false;
}
else{
  errorMessage1.style.display="none";
  errorMessage2.style.display="none";
  password.style.borderColor="#dddfe2";
  emailId.style.borderColor="#dddfe2";
return true;
}
}