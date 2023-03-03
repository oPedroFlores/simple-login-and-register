//Email
{
  //consts
  const fKeys = [
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Escape",
    "CapsLock",
    "NumLock",
    "Tab",
    "NumLock",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "End",
    "Delete",
    "PageDown",
    "PageUp",
    "Home",
    "Insert",
    "ScrollLock",
    "Pause",
    "ContextMenu",
    "Enter",
  ];

  //Verificando email colocado
  {
    let inputBox = document.getElementById("email-input"); //Saber em qual input adicionar a classe
    inputBox.addEventListener("keydown", (event) => {
      let email = document.getElementById("email").value; //Verificar se o email é válido
      let email2 = document.getElementById("email2").value; //Verificar se  o segundo email é compativel
      let escritaErrado = document.getElementById("email-invalido"); //Span para dizer que está errado
      let inputBox = document.getElementById("email-input"); //Saber em qual input adicionar a classe

      let compativel = verificarEmail(email);

      if (compativel) {
        inputBox.classList.remove("invalid-input");
        escritaErrado.innerHTML = "";
      } else {
        inputBox.classList.add("invalid-input");
        escritaErrado.innerHTML = "O email não é válido";
      }

      if (email2 != "") {
        mudancaPrimeiroEmail(event.key, event.location);
      }
    });
  }

  //Função que, ao mudar o primeiro email, verifica se ambos os emails colocados ainda são iguais
  function mudancaPrimeiroEmail(key, location) {
    let email = document.getElementById("email").value; //Verificar se o email é válido
    let email2 = document.getElementById("email2").value; //Verificar se  o segundo email é compativel
    let inputBox = document.getElementById("email-input2"); //Saber em qual input adicionar a classe
    let escritaErrado = document.getElementById("email-invalido2"); //Span para dizer que está errado

    let fKeysExist = fKeys.includes(key);

    if (location == 0 && !fKeysExist) {
      if (key == "Backspace") {
        email = email.slice(0, -1);
      } else {
        email += key;
      }
    }

    if (email == email2) {
      inputBox.classList.remove("invalid-input");
      ~inputBox.classList.add("input-valido");
      escritaErrado.innerHTML = "";
    } else {
      inputBox.classList.add("invalid-input");
      inputBox.classList.remove("input-valido");
      escritaErrado.innerHTML = "O email não é compatível";
    }
  }

  //Verificar se é um email
  function verificarEmail(email) {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
      return true;
    } else {
      return false;
    }
  }

  //Verificar se os emails são iguais
  {
    let inputBox = document.getElementById("email-input2"); //Saber em qual input adicionar a classe
    let escritaErrado = document.getElementById("email-invalido2"); //Span para dizer que está errado

    inputBox.addEventListener("keydown", (event) => {
      let email2 = document.getElementById("email2").value; //Verificar se  o segundo email é compativel
      let email = document.getElementById("email").value;

      let fKeysExist = fKeys.includes(event.key);

      if (event.location == 0 && !fKeysExist) {
        if (event.key == "Backspace") {
          email2 = email2.slice(0, -1);
        } else {
          email2 += event.key;
        }
      }

      if (email === email2) {
        inputBox.classList.remove("invalid-input");
        inputBox.classList.add("input-valido");
        escritaErrado.innerHTML = "";
      } else {
        inputBox.classList.add("invalid-input");
        escritaErrado.innerHTML = "O email não é compatível";
        inputBox.classList.remove("input-valido");
      }
    });
  }
}

//Senha
{
  //consts
  const fKeys = [
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Escape",
    "CapsLock",
    "NumLock",
    "Tab",
    "NumLock",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "End",
    "Delete",
    "PageDown",
    "PageUp",
    "Home",
    "Insert",
    "ScrollLock",
    "Pause",
    "ContextMenu",
    "Enter",
  ];

  const opChar = [
    "@",
    "!",
    "#",
    "%",
    "&",
    "*",
    "(",
    ")",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
    "+",
    "-",
    "[",
    "]",
    "/",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "\\",
  ];
  //Verificando a senha colocada
  {
    let inputBox = document.getElementById("senha-input");
    inputBox.addEventListener("keydown", (event) => {
      let senha = document.getElementById("pass").value;
      let senha2 = document.getElementById("pass2").value;
      let escritaErrado = document.getElementById("senha-invalida");
      let inputBox = document.getElementById("senha-input");

      let compativel = verificarSenha(senha, event.key, event.location);

      if (compativel) {
        inputBox.classList.remove("invalid-input");
        escritaErrado.innerHTML = "";
      } else {
        inputBox.classList.add("invalid-input");
        escritaErrado.innerHTML = "A senha é muito fraca";
      }

      if (senha2 != "") {
        mudancaPrimeiraSenha(event.key, event.location);
      }
    });
  }

  //Função que, ao mudar a primeira senha, verifica se ambas as senhas colocadas ainda são iguais
  function mudancaPrimeiraSenha(key, location) {
    let senha = document.getElementById("pass").value;
    let senha2 = document.getElementById("pass2").value;
    let inputBox = document.getElementById("senha-input2");
    let escritaErrado = document.getElementById("senha-invalida2");

    let fKeysExist = fKeys.includes(key);

    if (location == 0 && !fKeysExist) {
      if (key == "Backspace") {
        senha = senha.slice(0, -1);
      } else {
        senha += senha;
      }
    }

    if (senha == senha2) {
      inputBox.classList.remove("invalid-input");
      ~inputBox.classList.add("input-valido");
      escritaErrado.innerHTML = "";
    } else {
      inputBox.classList.add("invalid-input");
      inputBox.classList.remove("input-valido");
      escritaErrado.innerHTML = "As senhas não são compatíveis";
    }
  }

  //Verificar se é uma senha válida
  function verificarSenha(senha, key, location) {
    let fKeysExist = fKeys.includes(key);

    if (location == 0 && !fKeysExist) {
      if (key == "Backspace") {
        senha = senha.slice(0, -1);
      } else {
        senha += key;
      }
      var paswdPattern =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,25}$/;
      if (senha.match(paswdPattern)) {
        return true;
      } else {
        return false;
      }
    }
  }

  //Verificar se as senhas são iguais
  {
    let inputBox = document.getElementById("senha-input2");
    let escritaErrado = document.getElementById("senha-invalida2");

    inputBox.addEventListener("keydown", (event) => {
      let senha2 = document.getElementById("pass2").value;
      let senha = document.getElementById("pass").value;

      let fKeysExist = fKeys.includes(event.key);

      if (event.location == 0 && !fKeysExist) {
        if (event.key == "Backspace") {
          senha2 = senha2.slice(0, -1);
        } else {
          senha2 += event.key;
        }
      }

      if (senha === senha2) {
        inputBox.classList.remove("invalid-input");
        inputBox.classList.add("input-valido");
        escritaErrado.innerHTML = "";
      } else {
        inputBox.classList.add("invalid-input");
        escritaErrado.innerHTML = "As senhas não são compatíveis";
        inputBox.classList.remove("input-valido");
      }
    });
  }
}
