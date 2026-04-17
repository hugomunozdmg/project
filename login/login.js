let password = "password";

function doLogin() {
  user = document.getElementById("user").value;
  pass = document.getElementById("password").value;
  //la variable user esta en el archivo index.js, ahí declaro las varibles de uso global
  //password solo la uso aqui para comprobacion, asi que la declaro aqui
  if (!checkPassowrd(pass)) {
    document.getElementById("alert").innerText = "password doesnt match";
    setTimeout(() => {document.getElementById("alert").innerText = ""}, 2000);
  }else{
    document.getElementById("alert").innerText = "login success"
  }
}

function checkPassowrd(pass) {
  return pass == password;
}
