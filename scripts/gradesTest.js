const { mainModule } = require("process");

function askGrades(nota) {

    if (nota < 3 && nota > 0) {
        return('Muy Deficiente');
      } else if (nota < 5){
        return('Insuficiente');
      }else if (nota < 6) {
        return('Suficiente');         
      } else if (nota < 7) {
        return('Bien');        
      } else if (nota < 9) {
        return('Notable');        
      } else if (nota <=10) {
        return('Sobresaliente');        
      } else {
        return('Nota inválida');        
      }
}

module.exports = askGrades;
