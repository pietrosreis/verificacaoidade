function verificar() {
  const anoInput = document.getElementById("txtano");
  const res = document.getElementById("res");
  const ano = Number(anoInput.value);

  const data = new Date();
  const anoAtual = data.getFullYear();

  if (!ano || ano <= 0 || ano > anoAtual) {
    res.innerHTML = "⚠️ Verifique o ano de nascimento e tente novamente.";
    return;
  }

  const idade = anoAtual - ano;
  const sexRadios = document.getElementsByName("radsex");
  const sexo = sexRadios[0].checked ? "M" : "F";

  let img = "";
  let faixa = "";

  if (idade >= 0 && idade < 10) {
    faixa = "criança";
    img = "crianca.png";
  } else if (idade < 21) {
    faixa = "adolescente";
    img = sexo === "M" ? "adolescentem.png" : "adolescente.png";
  } else if (idade < 50) {
    faixa = "adulto(a)";
    img = sexo === "M" ? "adulto.png" : "adulta.png";
  } else {
    faixa = "idoso(a)";
    img = sexo === "M" ? "idoso.png" : "idosa.png";
  }

  const generoTxt = sexo === "M" ? "Homem" : "Mulher";
  res.innerHTML = `Detectamos ${generoTxt} com <strong>${idade}</strong> anos (${faixa}).<br/>`;
  res.innerHTML += `<img src="${img}" alt="Imagem representando ${faixa}">`;
}
