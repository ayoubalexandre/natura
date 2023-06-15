import locators from "./locators";
import faker from "faker";
import gerarCpf from "gerar-cpf";
import generatePassword from "./generatePassword";
import generateDateBirth from "./generateDateBirth";
import generatePhoneNumber from "./generatePhoneNumber";

//Navegação dentro do site aesop
Cypress.Commands.add("acessarPaginaCadastro", () => {
  cy.xpath(locators.HOME.XP_MENU).click();
  cy.contains(locators.HOME.CADASTRAR_SE).click();
});

//Cadastro de pessoa aesop
Cypress.Commands.add("cadastrarPessoa", () => {
  //Gerar senha com critérios
  const gerarSenha = new generatePassword();
  const senha = gerarSenha.generatePassword();

  //Gerar uma data de nascimento entre 18 e 80 anos
  const dataNascimento = new generateDateBirth();
  const dataNascimentoFormatada = dataNascimento.generateDateBirth();

  //Gerar telefone com ddd
  const numeroTelefone = new generatePhoneNumber();
  const dddTelefone = numeroTelefone.generatePhoneNumber();

  //Gerar CPF válido
  const cpf = gerarCpf();

  //Gerar Nome
  const nome = faker.name.firstName();

  cy.get(locators.CADASTRO.ACCEPT_COOKIES).click();
  cy.xpath(locators.CADASTRO.XP_FIRST_NAME).type(nome);
  cy.xpath(locators.CADASTRO.XP_LAST_NAME).type(faker.name.lastName());
  cy.xpath(locators.CADASTRO.XP_EMAIL).type(faker.internet.email());
  cy.get(locators.CADASTRO.PASSWORD).type(senha);
  cy.get(locators.CADASTRO.CONFIRM_PASSWORD).type(senha);
  cy.xpath(locators.CADASTRO.XP_CPF).type(cpf);
  cy.xpath(locators.CADASTRO.XP_DATE_OF_BIRTH).type(dataNascimentoFormatada);
  cy.xpath(locators.CADASTRO.XP_PHONE).type(dddTelefone);
  cy.get(locators.CADASTRO.ACCEPTED_TERMS).check();
  cy.xpath(locators.CADASTRO.XP_CREATE_ACCOUNT).click();
  cy.xpath(locators.HOME.XP_MENU).click();
  cy.xpath(locators.HOME.XP_TITULO_MENU).should("contain", nome);
});
