class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
  }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    addToHand(card) {
        this.hand.push(card);
    }

    playCard() {
        return this.hand.pop();
    }

    addToHand(card) {
        this.hand.unshift(card); 
    }
    
    incrementScore() {
        this.score++;
    }
}

class Game {
    constructor() {
        this.p1 = {
            score:0,
            hand:[]
        },
        this.p2 = {
            score:0,
            hand:[]
        }
        this.prepareGame();
        this.playGame();
    }

    prepareGame() {
        let deck = [];
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let x = 0; x < ranks.length; x++) {
            for (let s = 0; s < suits.length; s++) {
                let card = new Card(ranks[x], suits[s], x + 2);
                deck.push(card);
            }
        }

        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        this.p1.hand = deck.splice(0, 26);
        this.p2.hand = deck.splice(0, 26);
    }

    playGame() {
        let p1 = this.player1;
        let p2 = this.player2;

        for (let x = 0; x < p1.hand.length; x++) {
            const card1 = p1.playCard();
            const card2 = p2.playCard();

            console.log(`Round ${x + 1}: ${p1.name} plays ${card1.rank} of ${card1.suit}, ${p2.name} plays ${card2.rank} of ${card2.suit}`);

            if (card1.value > card2.value) {
                p1.incrementScore();
                console.log(`${p1.name} wins the round!`);
            } else if (card1.value < card2.value) {
                p2.incrementScore();
                console.log(`${p2.name} wins the round!`);
            }
        }


        let war = new Game();
        

        

//display final scores and declare the winner
console.log(`Final Scores - ${p1.name}: ${p1.score}, ${p2.name}: ${p2.score}`);
if (p1.score > p2.score) {
    console.log(`${p1.name} wins the game!`);
  } else if (p1.score < p2.score) {
    console.log(`${p2.name} wins the game!`);
} else {
    console.log("The game is a tie!");
  }
    }
}