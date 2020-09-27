

function checkDate (day, month , year) {
    // 30 dni
    let months_30 = [4,6,9,11];

    if (year < 2001 || year > 2099) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false; 
    }

    if (day < 1 || day > 31 ) {
        return false; 
    } 

    // jest podzielna przez 4 i niepodzielna przez 100 lub
    // jest podzielna przez 400
    if (month == 2 ) {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0 )) {
            if (day <= 29 ) {
                return true; 
            } else {
                return false; 
            }
        } else {
            if (day <= 28) {
                return true; 
            } else {
                return false; 
            }
        }
    }

    if (months_30.includes(month) && day == 31) {
        return false; 
    }
    
    return true; 

}