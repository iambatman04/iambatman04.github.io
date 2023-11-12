let InputField = document.getElementById("InputField");
let buttons = document.querySelectorAll("buttons");

let str = "";

buttons.forEach((element) => {
  element.addEventListener("click", (j) => {
    if (j.target.innerText == "=") {
      str = String(eval(str));
      InputField.value = str;
    } else if (j.target.innerText == "AC") {
      str = "";
      InputField.value = str;
    } else if (j.target.innerText == "DEL") {
      str = str.substring(0, str.length - 1);
      InputField.value = str;
    } else if (j.target.id == "plusminus") {
      str = String(-eval(str));
      InputField.value = str;
    } else {
      str += j.target.innerText;
      InputField.value = str;
    }
  });
});
