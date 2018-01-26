var btnCipher = document.getElementById('btn-cipher');
var btnDecipher = document.getElementById('btn-decipher');
var boxCipher = document.getElementById('container-cipher');
var boxDecipher = document.getElementById('container-decipher');

btnCipher.addEventListener('click', () => {
  let cipherValue = document.getElementById('val-cipher').value;
  for (let i = 0; i < cipherValue.length; i++) {
    // condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii,
    // una vez convertido condicionamosa que este entre el rango
    if ((cipherValue.charCodeAt(i) > 64 && cipherValue.charCodeAt(i) < 91) || (cipherValue.charCodeAt(i) > 96 && cipherValue.charCodeAt(i) < 123)) {
      var newPhrase = '';

      // recorremos todo  el string
      for (let j = 0; j < cipherValue.length; j++) {
        let toAscci = cipherValue.charCodeAt(j); // convierte el string ingresado a su equivalente en Ascii en la posicion i

        if (toAscci > 64 && toAscci < 91) // formula para mayusculas
          newPhrase += String.fromCharCode((toAscci - 65 + 33) % 26 + 65);
        else if (toAscci > 96 && toAscci < 123) // para minusculas
          newPhrase += String.fromCharCode((toAscci - 97 + 33) % 26 + 97);
        else
          newPhrase += String.fromCharCode(toAscci);
      }
    }
  }
  let resultCipher = document.createElement('p');
  resultCipher.textContent = newPhrase;
  resultCipher.setAttribute('class', 'color');
  boxCipher.appendChild(resultCipher);
});

btnDecipher.addEventListener('click', () => {
  let decipherValue = document.getElementById('val-decipher').value;
  for (let i = 0; i < decipherValue.length; i++) {
    // condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii,
    // una vez convertido condicionamosa que este entre el rango
    if ((decipherValue.charCodeAt(i) > 64 && decipherValue.charCodeAt(i) < 91) || (decipherValue.charCodeAt(i) > 96 && decipherValue.charCodeAt(i) < 123)) {
      var newPhrase = '';

      // recorremos todo  el string
      for (let j = 0; j < decipherValue.length; j++) {
        let toAscci = decipherValue.charCodeAt(j); // convierte el string ingresado a su equivalente en Ascii en la posicion i

        if (toAscci > 64 && toAscci < 91) // para mayusculas
          newPhrase += String.fromCharCode((toAscci - 65 - 33 + 26 * 2) % 26 + 65);// 26*2 porque recorre el abecedario dos veces para decifrar
        else if (toAscci > 96 && toAscci < 123) // paraminusculas
          newPhrase += String.fromCharCode((toAscci - 97 - 33 + 26 * 2) % 26 + 97);
        else
          newPhrase += String.fromCharCode(toAscci);
      }
    }
  }
  let resultDecipher = document.createElement('p');
  resultDecipher.textContent = newPhrase;
  resultDecipher.setAttribute('class', 'color');
  boxDecipher.appendChild(resultDecipher);
});
