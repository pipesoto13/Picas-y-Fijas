//Get number between 0 and 9.
function getRandomNumber() {
    return Math.floor(Math.random() * (10));
};

$(document).ready(function() {
    let digits = [8,0,4,7];
/*     for (let i = 0; i < 4; i++) {
        let digit = getRandomNumber();

        //Get other number if exist in array
        do {
            digit = getRandomNumber(); 
        } while (digits.includes(digit));

        //Save number in array
        digits.push(digit);
    } */
    
    const number = digits.join('');
    console.log(number);
    
    $("#number").on("keypress", function(e) {
        if (e.which === 13) {
            const inputNumber = $("#number").val();
            const arrOfNumber = inputNumber.split('');
            const repeatedNumber =  arrOfNumber.some(function(v,i,a){
                return a.lastIndexOf(v)!=i;
              });
            if ((inputNumber.length === 4) && (!repeatedNumber)) {
                $("input").css("outline-color", "#84b3ed");
                let contPicas = 0;
                let contFijas = 0;
                arrOfNumber.forEach((element,i) => {
                    if (element == (number[i])) {
                        contFijas ++;
                    } else if (number.includes(element)){
                        contPicas ++;
                    }
                });
    
                const template = `
                    <tr>
                        <td>${inputNumber}</td>
                        <td>${contPicas}</td>
                        <td>${contFijas}</td>
                    </tr>
                `
                $("table tbody").prepend(template);
    
                $("#number").val("");
                
            } else {
                $("input").css("outline-color", "red");
                alert("Ingrese un número de 4 dígitos y que no tenga dígitos repetidos")

            }

        }
    })
})

