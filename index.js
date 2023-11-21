let passwordlength = document.getElementById("passwordlength");
let password = document.getElementById("password");

function GetPassword() {
  const lowerAlphabet = "abcdefghijklmnopqrstupwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUPWXYZ";
  const numeric = "0123456789";
  const simbols = '!@#$%^&*()_-+={}[]",./?|~`;:';

  const data = lowerAlphabet + upperAlphabet + numeric + simbols;
  let generator = "";
  for (let index = 0; index < passwordlength.value; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  password.value = generator;
  setTimeout(() => {
    alert("Password has been generated!");
  }, 1000);
}

function SavePassword() {
  const data = password.value;
  const filename = "password.txt";
  const file = new Blob([data], { type: "text/plain" });
  const a = document.createElement("a");
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}