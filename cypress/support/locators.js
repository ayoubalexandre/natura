//Elementos das páginas para interação

const locators = {
  HOME: {
    XP_MENU:
      "//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart']",
    // XP_MENU:
    //   "//i[@class='material-icons MuiIcon-root natds-icons natds-icons-filled-navigation-menu natds11 natds12']",
    CADASTRAR_SE: "Cadastrar-se",
    XP_TITULO_MENU: "//h6[@class='MuiTypography-root MuiTypography-h6']",
  },
  CADASTRO: {
    XP_FIRST_NAME:
      "//input[@class='MuiInputBase-input MuiInput-input' and @name='firstName']",
    XP_LAST_NAME:
      "//input[@class='MuiInputBase-input MuiInput-input' and @name='lastName']",
    XP_EMAIL:
      "//input[@class='MuiInputBase-input MuiInput-input' and @name='email']",
    PASSWORD: "#password-field",
    CONFIRM_PASSWORD: "#confirmPassword-field",
    XP_CPF:
      "//input[@class='MuiInputBase-input MuiInput-input' and @name='cpf']",
    XP_DATE_OF_BIRTH:
      "//input[@class='MuiInputBase-input MuiInput-input' and @name='dateOfBirth']",
    XP_PHONE:
      "//input[@class='MuiInputBase-input MuiInput-input' and @name='homePhone']",
    ACCEPTED_TERMS: "#acceptedterms",
    ACCEPT_COOKIES: "#onetrust-accept-btn-handler",
    XP_CREATE_ACCOUNT: "//button[@type='submit']",
  },
};

export default locators;
