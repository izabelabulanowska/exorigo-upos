
function checkEAN (barcode, barcodeType) {
    let possibleLengthArr; 
    let barcodeLen = barcode.length; 
    let missingZeroLen; 
    let addOnLen;
    
    let isNan = /^\d+$/.test(barcode);
    if(!isNan) {
        throw 'Podany kod zawiera znaki inne niż cyfry.'
    }

    if (barcodeType == 1) {
        possibleLengthArr = [7, 8, 9, 10, 12, 13];
        missingZeroLen = [7, 9, 12]; 
        addOnLen = [10, 13]; 
    } else if (barcodeType == 2) {
        possibleLengthArr = [12, 13, 14, 15, 17, 18];
        missingZeroLen = [12, 14, 17];  
        addOnLen = [15, 18]; 
    } else {
         throw 'Podany typ kodu kreskowego jest błędny.'
    }

    if (!possibleLengthArr.includes(barcodeLen)) {
        throw 'Zła długość kodu kreskowego dla wybranego typu EAN.'
    }

    if (missingZeroLen.includes(barcodeLen)) {
        barcode = '0' + barcode; 
        barcodeLen++; 
    }

    let clearBarcode;  

    if (addOnLen.includes(barcodeLen)) {
        clearBarcode = barcode.substring(0, 8);
    } else { clearBarCode = barcode; }

    if (checkControlNum (clearBarcode)) {
        return clearBarcode; 
    } else {
        throw 'Błędny kod.';
    }; 

}

function checkControlNum (barcode) {
    
    let controlNum = Number(barcode[barcode.length-1]);
    let barCodeToCheck = barcode.substring(0, barcode.length-1); 
    let barcodeArr = barCodeToCheck.split('');

    let evenArr = barcodeArr.filter(function(element, index, array) {
        return (index % 2 === 1);
    });
    let oddArr = barcodeArr.filter(function(element, index, array) {
        return (index % 2 === 0);
    }); 

    let sum = 0; 

    for (let i = 0 ; i< oddArr.length; i++) {
        sum += Number(oddArr[i]) * 3;
    }

    for (let i = 0; i< evenArr.length; i++) {
        sum += Number(evenArr[i]); 
    }

    if (10 - sum%10 === controlNum) {
        return true; 
    } else {
        throw 'Błąd cyfry kontrolnej.'
    }
}