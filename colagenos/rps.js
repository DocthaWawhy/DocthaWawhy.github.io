function playRPS(userChoice) {
  // Genera un número aleatorio entre 0 y 2
  const randomNumber = Math.floor(Math.random() * 3);
  
  // Asigna a cada número una opción de "piedra, papel o tijera"
  const options = ["piedra", "papel", "tijera"];
  const nightbotChoice = options[randomNumber];
  
  // Obtiene la opción elegida por el usuario
  const userChoice = args[0];
  
  // Compara la opción del usuario con la de Nightbot y determina el resultado
  if (userChoice === nightbotChoice) {
    "¡Empate! el Nighbot te copio y eligio tambien " + userChoice + " kottyHehN salio copiota el weon.";

  } else if (userChoice === "piedra" && nightbotChoice === "tijera") {
    "¡Asombroso kottyUwaaN ! Tu " + userChoice + " desintegro las " + nightbotChoice + " del Nightbot kottyHehN que idiota";

  } else if (userChoice === "papel" && nightbotChoice === "piedra") {
    "¡TUBULAR kottyGaspN ! Tu " + userChoice + " empaco a la " + nightbotChoice + " del Nightbot y la envio por correo hasta un anciano el cual la planto . . . kottyWhatN ¿que acaba de pasar aqui? ";

  } else if (userChoice === "tijera" && nightbotChoice === "papel") {
    "¿¿¡¡COMO!!?? Tu " + userChoice + " acaba de cortarle mal el pelo al Nighbot, el nightbot viendo lo malo que fue ahorrarse el pluquero, decidio usar su  " + nightbotChoice + " como sombrero, kottyPogN como la cancion!!!";

  } else {
    "¡Perdiste malo culaio kottyEvil! el Nightbot te saco su" + nightbotChoice + " la cual le saco la chucha a tu pobre " + userChoice + " kottySipN y sin despeinarse . . .";

  }
