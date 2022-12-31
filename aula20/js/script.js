const meuEscopo = () => {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  form.addEventListener("submit", evento => {
    evento.preventDefault();
    const name = form.querySelector(".name");
    const lastName = form.querySelector(".lastName");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: name.value,
      lastName: lastName.value,
      peso: peso.value,
      altura: altura.value
    });
    console.log(pessoas);

    resultado.innerHTML +=
      `<p>${name.value} ${lastName.value}</p>` +
      `<p>${peso.value} ${altura.value}</p>`;
  });
};
meuEscopo();
