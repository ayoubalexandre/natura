import faker from "faker";

class generatePhoneNumber {
  generatePhoneNumber() {
    //Gerar telefone com ddd
    const ddd = faker.random.number({ min: 11, max: 99 }).toString();
    const telefone = faker.phone.phoneNumber("9########");
    const dddTelefone = ddd + telefone;

    return dddTelefone;
  }
}

export default generatePhoneNumber;
