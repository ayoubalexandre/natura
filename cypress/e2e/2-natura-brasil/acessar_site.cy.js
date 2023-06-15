/// reference types="cypress"/>

import commands from "../../support/commands";
import messages from "../../support/messages";

beforeEach(() => {
  cy.acessarSiteNaturaBrasil();
});

//validação do acesso ao site aesop brasil
it("Validar site aesop", () => {
  cy.title().should("be.equal", messages.TITULO.HOME_NATURA);
});
