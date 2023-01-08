function playRPS(userChoice) {
  // Genera un número aleatorio entre 0 y 2
  const randomNumber = Math.floor(Math.random() * 3);
  
  // Asigna a cada número una opción de "piedra, papel o tijera"
  const options = ["piedra", "papel", "tijera"];
  const nightbotChoice = options[randomNumber];
  
  // Compara la opción del usuario con la de Nightbot y determina el resultado
  if (userChoice === nightbotChoice) {
    return "¡Empate!";

  } else if (userChoice === "piedra" && nightbotChoice === "tijera") {
return "¡Asombroso kottyUwaaN !";

} else if (userChoice === "papel" && nightbotChoice === "piedra") {
return "¡TUBULAR kottyGaspN ! ";

} else if (userChoice === "tijera" && nightbotChoice === "papel") {
return "¿¿¡¡COMO!!??";

} else {
return "¡Perdiste";

}
}
