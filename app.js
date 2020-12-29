//Function to get number between 0 and 9.
function getRandomNumber() {
    return Math.floor(Math.random() * (10));
};

//Function for four digits number without repeating 
function getFourDigitsNumber() { 
    let digits = [];
    for (let i = 0; i < 4; i++) {
        let digit = getRandomNumber();

        //Get another number if it exists in array
        do {
            digit = getRandomNumber(); 
        } while (digits.includes(digit));

        //Save number in array
        digits.push(digit);

    }
    //Juts for display number in console and check
    const number = digits.join('');
    console.log(number);
    return number;
}

$(document).ready(function() {
    //Call functions for four digits number
    let number = getFourDigitsNumber();
    
    $("#number").on("keypress", function(e) {
        if (e.which === 13) {
            const inputNumber = $("#number").val();
            const arrOfNumber = inputNumber.split('');
            //Verify repeated number in array
            const repeatedNumber =  arrOfNumber.some(function(v,i,a){
                return a.lastIndexOf(v)!=i;
              });
            
            // Validate conditions to continue (4 digits number and no repeated)
            if ((inputNumber.length === 4) && (!repeatedNumber)) {
                $("input").css("outline-color", "#84b3ed");
                $("label span").css("color", "black");
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
                //Add row with info
                $("table tbody").prepend(template);
                
                //Erase input field
                $("#number").val("");

                //Open modal with winner message
                if (contFijas === 4) {
                    $("#myModal").css("display","flex");
                    $("input").prop( "disabled", true ); //Disable input
                }

                //Close modal and reload
                $(".modal-content button").on("click", function(){
                    $("#myModal").css("display","none");
                    $("input").prop( "disabled", false ); //Enable input
                    $("table tbody").children().remove();
                    location.reload();
                })
                
            } else {
                //Display red colors in validation error if number do not match validations
                $("input").css("outline-color", "red");
                $("label span").css("color", "red");
            }
        }
    })
})

