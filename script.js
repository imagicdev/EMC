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
if (document.getElementById) {
        // Swap the native alert for the custom
        // alert
        window.alert = function (alert_message) {
            custom_alert(alert_message);
        }
}
function custom_alert(alert_message) {

        /* You can utilize the web page address
         * for the alert message by doing the following:
        const document.location.href + " says: ";
        const ALERT_BUTTON_TEXT = "DONE";

        // Check if there is an HTML element with
        // an ID of "alert_container".If true, abort
        // the creation of the custom alert.
        let is_alert_container_exist = document.getElementById("alert_container");
        if (is_alert_container_exist) {
            return;
        }

        // Create a div to serve as the alert
        // container. Afterward, attach it to the body
        // element.
        let get_body_element = document.querySelector("body");
        let div_for_alert_container = document.createElement("div");
        let alert_container = get_body_element.appendChild(div_for_alert_container);

        // Add an HTML ID and a class name for the
        // alert container
        alert_container.id = "alert_container";
        alert_container.className = "alert_container"

        // Create the div for the alert_box and attach
        // it to the alert container.
        let div_for_alert_box = document.createElement("div")
        let alert_box = alert_container.appendChild(div_for_alert_box);
        alert_box.className = "alert_box";

        // Set the position of the alert box using
        // scrollTop, scrollWidth, and offsetWidth
        alert_box.style.top = document.documentElement.scrollTop + "px";
        alert_box.style.left = (document.documentElement.scrollWidth - alert_box.offsetWidth) / 2 + "px";

        // Create h1 to hold the alert title
        let alert_header_tag = document.createElement("h1");
        let alert_title_text = document.createTextNode(ALERT_TITLE)
        let alert_title= alert_box.appendChild(alert_header_tag);
        alert_title.appendChild(alert_title_text);

        // Create a paragraph element to hold the
        // alert message
        let alert_paragraph_tag = document.createElement("p");
        let alert_message_container = alert_box.appendChild(alert_paragraph_tag);
        alert_message_container.textContent = alert_message;

        // Create the OK button
        let ok_button_tag = document.createElement("button");
        let ok_button_text = document.createTextNode(ALERT_BUTTON_TEXT)
        let ok_button = alert_box.appendChild(ok_button_tag);
        ok_button.className = "close_btn";
        ok_button.appendChild(ok_button_text);

        // Add an event listener that'll close the
        // custom alert
        ok_button.addEventListener("click", function () {
            remove_custom_alert();
        }, false);
    }

    function remove_custom_alert() {
        let HTML_body = document.querySelector("body");
        let alert_container = document.getElementById("alert_container");
        HTML_body.removeChild(alert_container);
    }
function options2() {
  var options2 = prompt1("what would you like to do, email, copy to clipboard", qr code)
  if (options2.toLowerCase() = "email") {
    document.open("mailto:" + prompt1("email of target") + "?subject=Encripted Message&body=" + EmcMessage)
  }else if(options2.toLowerCase() = ("copy" || "copy to clipboard")) {
    navigator.clipboard.write(EmcMessage);
  }else if(options2.toLowerCase() = "qr code") {
    var qrc = new QRCode(document.getElementById("alert"), EmcMessage) 
    document.getElementById("alert").style.visibility = "visible";
  }else{options2()}
}
function options1() {
  var options = prompt1("what would you like to do, Encode, Decode, Change UID and PWD")
  if (options.toLowerCase() = encode){
    var target = prompt1("Target uid of user")
    var message = prompt1("what is the message")
    const a = [target, message];
    var EmcMessage = encodeURIComponet(bota(encodeURIComponent(a.join("|"))))
    options2()
  }else if(options.toLowerCase() = decode){
    var message = prompt("what is the encoded message?")
    var decMessage = decodeURIComponent(atob(decodeURIComponent(message)))
    const split = split(decMessage, "|")
    if (split[1] = UID) {alert("your friends message is" + split[2])}else{alert("you don’t have access to this message")}
  }else if(options.toLowerCase() = ("change" || "change uid and pwd"){
    var UID = prompt1("Create a user id use 10 numbers _you can use your phone number_");
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
