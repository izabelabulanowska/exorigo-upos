

function wypiszLiczby () {
    for ( var i = 1; i<= 100; i++) {
        let res = ''; 
        let other  = false; 
    
        let dziel_trzy = false; 
        let dziel_piec = false; 

        if ( i%3 == 0 ) {
            res = 'Fizz'; 
            other = true; 
        }
        if ( i%5 == 0 ) {
            res += 'Buzz'; 
            other = true; 
        }
        if (other === false) {
            res = i; 
        }
        console.log(res);
        
    }
}
