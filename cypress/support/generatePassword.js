class generatePassword {
  //Gerar senha segundo critérios
  generatePassword() {
    const specialCharacters = ["@", "#", "!", "%"];
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    let password = "";

    password += Cypress._.sample(specialCharacters);
    password += Cypress._.sample(numbers);
    password += Cypress._.sample(lowercaseLetters);
    password += Cypress._.sample(uppercaseLetters);

    for (let i = 4; i < 8; i++) {
      const randomCategory = Cypress._.random(3);

      switch (randomCategory) {
        case 0:
          password += Cypress._.sample(specialCharacters);
          break;
        case 1:
          password += Cypress._.sample(numbers);
          break;
        case 2:
          password += Cypress._.sample(lowercaseLetters);
          break;
        case 3:
          password += Cypress._.sample(uppercaseLetters);
          break;
      }
    }

    return password;
  }
}

export default generatePassword;
