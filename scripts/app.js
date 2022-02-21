const button = document.getElementById('boton');
const parent = document.getElementById('parent');

button.addEventListener("click", nota);

export function nota() {
    let nota= document.getElementById('nota').value;
    let result = document.createElement('p');

    if (nota < 3 && nota > 0) {
      result.innerHTML=('Muy Deficiente');
		parent.appendChild(result); 
    } else if (nota < 5){
      result.innerHTML=('Insuficiente');
		parent.appendChild(result); 
    }else if (nota < 6) {
      result.innerHTML=('Suficiente');
		parent.appendChild(result);
    } else if (nota < 7) {
      result.innerHTML=('Bien');
		parent.appendChild(result);
    } else if (nota < 9) {
      result.innerHTML=('Notable');
		parent.appendChild(result);
    } else if (nota <=10) {
      result.innerHTML=('Sobresaliente');
		parent.appendChild(result);
    } else {
      result.innerHTML=('Nota inválida');
	    parent.appendChild(result);
    }
}