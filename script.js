const rollBtn = document.getElementById('rollBtn');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const result = document.getElementById('result');

rollBtn.addEventListener('click', () => {
  const diceRoll1 = Math.floor(Math.random() * 6) + 1;
  const diceRoll2 = Math.floor(Math.random() * 6) + 1;

  dice1.textContent = diceRoll1;
  dice2.textContent = diceRoll2;

  if (diceRoll1 === diceRoll2) {
    result.textContent = 'Parabéns! Você tirou um par!';
    document.body.style.backgroundColor = '#ffeb3b'; // Cor para quando for um par
  } else {
    result.textContent = `Você tirou ${diceRoll1} e ${diceRoll2}`;
    document.body.style.backgroundColor = '#f0f0f0'; // Cor padrão
  }
});
