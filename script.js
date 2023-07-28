function calcularGanhos() {
    var lavoura = document.getElementById("lavoura").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
  
    var precos = {
      chirivia: 35,
      batata: 80,
      couveflor: 175,
      melao: 250,
      milho: 50,
    };

    var lucro = precos[lavoura] * quantidade;
  
    document.getElementById("result").textContent = "Lucro total: " + lucro + " moedas";
  }
  