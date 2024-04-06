let alphabet = `абвгдеёжзийклмнопрстуфхцчшщъыьэюя`;

function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

const randomGenerate = () => {
  const newWord =
    alphabet[randomIndex(alphabet.length)] +
    alphabet[randomIndex(alphabet.length)] +
    alphabet[randomIndex(alphabet.length)] +
    alphabet[randomIndex(alphabet.length)];
  document.getElementById("result").innerText = newWord;
};
