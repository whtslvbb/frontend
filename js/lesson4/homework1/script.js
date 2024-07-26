let i = 4;
let bool = true;
let password;
while (bool) {
  password = +prompt(`введіть пароль(залишилось ${i} спроб)`);
  i--;
  if (password === 1234) {
    bool = false;
    document.write("Welcome!");
  }
  if (i < 1) {
    bool = false;
    document.write("Будь ласка спробуйте пізніше!");
  }
}
