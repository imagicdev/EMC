function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function alert1(text) {
  document.getElementById("alerttxt").innerHTML = text
  document.getElementById("alert").style.visibility = "visible"
}
function prompt1(with)
  document.getElementById("
function options2() {
  var options2 = prompt("what would you like to do, email, copy to clipboard", qr code)
  if (options2.toLowerCase() = "email") {
    document.open("mailto:" + prompt("email of target") + "?subject=Encripted Message&body=" + EmcMessage)
  }else if(options2.toLowerCase() = ("copy" || "copy to clipboard")) {
    navigator.clipboard.write(EmcMessage);
  }else if(options2.toLowerCase() = "qr code") {
    var qrc = new QRCode(document.getElementById("qr"), EmcMessage) 
    document.getElementById("qr").style.visibility = "visible";
  }else{options2()}
}
function options1() {
  var options = prompt("what would you like to do, Encode, Decode, Change UID and PWD")
  if (options.toLowerCase() = encode){
    var target = prompt("Target uid of user")
    var message = prompt("what is the message")
    const a = [target, message];
    var EmcMessage = encodeURIComponet(bota(encodeURIComponent(a.join("|"))))
    options2()
  }else if(options.toLowerCase() = decode){
    var message = prompt("what is the encoded message?")
    var decMessage = decodeURIComponent(atob(decodeURIComponent(message)))
    const split = split(decMessage, "|")
    if (split[1] = UID) {alert("your friends message is" + split[2])}else{alert("you don’t have access to this message")}
  }else if(options.toLowerCase() = ("change" || "change uid and pwd"){
    var UID = prompt("Create a user id use 10 numbers _you can use your phone number_");
    if (UID < 999999999 && UID > 10000000000) {
      setCookie("uid", UID, 1000000000000000000);
      setCookie("pwd", prompt("Create a password. _something you can remember_"), 100000000000000000000);
      setcookie("account", true, 10000000000000);
    }
  }else{options1()}
}
function run() {
alert("Welcome to Encripted Messaging Center");
if (getCookie("account") = false) {
  alert("Welcome to EMC")
  var UID = prompt("Create a user id use 10 numbers _you can use your phone number_");
  if (UID < 999999999 && UID > 10000000000) {
    setCookie("uid", UID, 1000000000000000000);
    setCookie("pwd", prompt("Create a password. _something you can remember_"), 100000000000000000000);
    setcookie("account", true, 10000000000000);
  }
}else if(getCookie("account") = true){
  options1()
}
}
