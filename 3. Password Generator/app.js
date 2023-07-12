const upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerSet = "qwertyuiopasdfghjklzxcvbnm";
const numberSet = "1234567890";
const symboleSet = "!@#$%^&*()_=/";

const display = document.getElementById("display");
const passLengthInput = document.getElementById("passLength");
const upperCaseInput = document.getElementById("upperCase");
const lowerCaseInput = document.getElementById("lowerCase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const button = document.getElementById("button");

const generateData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperCaseInput.checked) {
    password += generateData(upperSet);
  }
  if (lowerCaseInput.checked) {
    password += generateData(lowerSet);
  }
  if (numbersInput.checked) {
    password += generateData(numberSet);
  }
  if (symbolsInput.checked) {
    password += generateData(symboleSet);
  }
  if (password.length < passLengthInput.value) {
    return generatePassword(password);
  }
  display.value=truncateString(password, passLengthInput.value);
};



button.addEventListener("click", ()=>{
  generatePassword();
});

const truncateString = (str, num) => {
  if (str.length > num) {
    const subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
};
