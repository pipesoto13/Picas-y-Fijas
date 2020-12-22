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
            let contPicas = 0;
            let contFijas = 0;
            inputNumber.split('').forEach((element,i) => {
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
        }
    })
})

