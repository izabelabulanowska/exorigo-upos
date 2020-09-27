

class Game {
    constructor () {
        this.firstUser = {
            points: 0,
            name: 'pierwszy'
        };
        this.secondUser = {
            points: 0,
            name: 'drugi'
        };
        this.activeUser; 
        this.howManyCubes = 2; 
    }

    start () {
        for (let i = 0 ; i < 5; i++) {
            this.activeUser = this.firstUser; 
            this.getPoints();
            this.activeUser = this.secondUser;
            this.getPoints();
        }

        this.getWinner();
    }

    getPoints () {
        let user = this.activeUser; 
        let result = this.rollCubes();

        if (result == 7 || result == 11 || 0) {
            return; 
        } else if (result == 2 || result == 12) {
            user.point += 29,29; 
            return; 
        } 

        user.points += result;  
        

        for (let i =2; i< 11; i++){
            console.log('Rzut nr: ' + i);
            result = this.rollCubes();
            if (result == 0) {
                return;
            }

            user.points += result/i; 
        }
    }

    // rzuc koscmi
    rollCubes () {
        let sumofCubes = 0; 
        let howManyCubes = this.howManyCubes;
        for (let i = 0 ; i< howManyCubes; i++) {
            sumofCubes+= this.singleRoll();
        }
        if (sumofCubes == 5) {
            return 0;
        }
        return sumofCubes; 
    }

    singleRoll () {
        let dice = Math.floor(Math.random() * 6) + 1 ;
        return dice;
    }

    getWinner () {
        if (this.firstUser.points > this.secondUser.points) {
            console.log ( 'Wygrał gracz drugi.');
        } else if (this.firstUser.points < this.secondUser.points) {
            console.log ( 'Wygrał gracz pierwszy.');
        } else {
            console.log('Remis.'); 
        }
        console.log(`Gracz pierwszy : ${this.firstUser.points}`);
        console.log(`Gracz drugi : ${this.secondUser.points}`);
    }

}

