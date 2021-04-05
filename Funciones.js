function Operacion(op, n1, n2)
{
    if (isNaN(parseFloat(n1))) {
        alert('Ingresar un numero en el campo Numero 1');
    }

    else if (isNaN(parseFloat(n2))) {
        alert('Ingresar un numero en en el campo Numero 2');
    }

    else {

        switch (op) {

            case 'suma':
                var resultado = parseFloat(n1) + parseFloat(n2);
                alert('La suma es ' + resultado);
                break;

            case 'resta':
                var resultado = parseFloat(n1) - parseFloat(n2);
                alert('La resta es ' + resultado);
                break;

            case 'multiplicacion':
                var resultado = parseFloat(n1) * parseFloat(n2);
                alert('La multiplicacion es ' + resultado);
                break;

            case 'division':                

                if (n2 == 0) {

                    alert('No se puede dividir por cero');
                }

                else {
                    var resultado = parseFloat(n1) / parseFloat(n2);
                    alert('La division es ' + resultado);
                }                
                break;

        }

    }
}
