/* Does the inserted data make sense? */

function sanityCheck(){
    let kilometres = document.getElementById('kilometres').value;
    let age = document.getElementById('age').value;

    if(kilometres >= 1 && (age >= 0 && age <= 120)){
        return true;
    } 
    else{
        alert('Dati inseriti non validi!');
        return false;
    }
}

/* How much does the user have to pay? */

function priceCalc(){
    let kilometres = document.getElementById('kilometres').value;
    let age = document.getElementById('age').value;
    let priceKmRatio = 0.21;
    let price = priceKmRatio * kilometres;
    let priceDiscountMultiplier = 1;
    
    if(age <= 18 || age >= 65){
        if(age <= 18){
            priceDiscountMultiplier = 0.80;
        }
        else{
            priceDiscountMultiplier = 0.60;
        }
    }
    
    price *= priceDiscountMultiplier;
    price = price.toFixed(2);
    let priceMsg = `${price}$`;
    document.getElementById('price').innerText = priceMsg;

    if(priceDiscountMultiplier < 1){
        document.getElementById('price').style.color = 'green';
        document.getElementById('subtitle').innerText = `Hai diritto a uno sconto in quanto parte di una fascia di età debole.`;
    }
    else{
        document.getElementById('price').style.color = 'blue';
        document.getElementById('subtitle').innerText = ``;
    }
}

/* What's written on the ticket? */

function printTicket(){
    let fullName = document.getElementById('fullName').value;
    let kilometres = document.getElementById('kilometres').value;
    let age = document.getElementById('age').value;

    let ticketCode = fullName.charAt(0) + fullName.charAt(1) + fullName.charAt(2);
    ticketCode = ticketCode.toUpperCase();
    ticketCode += age;
    ticketCode += kilometres;

    document.getElementById('nameOutput').innerText = fullName;
    document.getElementById('codeOutput').innerText = ticketCode;

    let carriageOutput = Math.floor(Math.random() * 12) + 1; 
    let emailDate = new Date();

    emailDate =`${emailDate.getDate()}/${emailDate.getMonth()+1}/${emailDate.getFullYear()}`;

    document.getElementById('carriageOutput').innerText = carriageOutput;
    document.getElementById('emailDate').innerText = emailDate;
    document.getElementById('ticketContainer').style.display = 'block';
}