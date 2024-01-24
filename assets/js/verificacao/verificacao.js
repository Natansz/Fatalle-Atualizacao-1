function verificarIdade() {
    var inputDate = new Date(document.getElementById("dob").value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - inputDate.getFullYear();

    // Verificar se o aniversário já ocorreu este ano
    if (currentDate.getMonth() < inputDate.getMonth() || (currentDate.getMonth() === inputDate.getMonth() && currentDate.getDate() < inputDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      document.getElementById("result").innerHTML = "Você tem idade suficiente para acessar este conteúdo.";
      // Redirecionar para a página index1.html
      window.location.href = "index1.html";
    } else {
      document.getElementById("result").innerHTML = "Você não tem idade suficiente para acessar este conteúdo.";
    }
  }