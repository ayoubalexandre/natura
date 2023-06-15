import faker from "faker";

class generateDateBirth {
  generateDateBirth() {
    //Gerar uma data de nascimento entre 18 e 80 anos
    const dataInicio = new Date();
    dataInicio.setFullYear(dataInicio.getFullYear() - 18); // Subtrai 18 anos da data atual

    const dataFim = new Date();
    dataFim.setFullYear(dataFim.getFullYear() - 80); // Subtrai 80 anos da data atual

    const dataNascimento = faker.date.between(dataFim, dataInicio);
    const dia = dataNascimento.getDate().toString().padStart(2, "0");
    const mes = (dataNascimento.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataNascimento.getFullYear();

    const dataNascimentoFormatada = `${dia}/${mes}/${ano}`;

    return dataNascimentoFormatada;
  }
}

export default generateDateBirth;
