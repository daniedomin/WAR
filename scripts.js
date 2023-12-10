class Card {
    constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;

    }

}

class Deck {
constructor() {
    this.cards = this.generateDeck();
}

generateDeck() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const deck = [];

    for (const suit of suits) {
        for (const rank of ranks) {
            let value = ranks.indexOf (rank) +2 // assign values from 2 to 14 (ace as 14)
            deck.push(new Card(rank ,suit, value));
        }
    }
    return deck;
}
shuffle() {
    for (let i= this.cards.length - 1; i> 0; i --) {
        const j = Math.floor(Math.randiom() * (i+1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
}

dealCard() {
    return this.cards.pop();
  }
}

class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    playCard() {
        return this.hand.pop();
    }

    addToHand(card) {
        this.hand.unshift(card); 
    }
    
    incrementScore() {
        this.score += 1;
    }
}

// Game

const deck = new Deck();
deck.shuffle();


const player1 = new Player ("Player 1");
const player2 = new Player("Player 2");


// deal 26 cards to each player
for (let i = 0; i< 26; i++) {
    player1.addToHand(deck.dealCard());
    player2.addToHand(deck.dealCard());
}

//Play the rounds
for (let round = 0; round < 26; round++) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
}


//display round result
console.log(`Round ${round + 1}: ${player1.name} plays ${card1.rank} of ${card1.suit}, ${player2.name} plays ${card2.rank} of ${card2.suit}`) ;

if (card1.value > card2.value) {
    player1.incrememntScore()
    console.log(`${player.name} wins the round!`);
} else if (card1.value < card2.value) {
    player2.incrementScore();
    console.log(`${player2.name} wins the round!`);
} 



//display final scores and declare the winner
console.log(`Final Scores - ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`);
if (player1.score > player2.score) {
    console.log(`${player1.name} wins the game!`);
  } else if (player1.score < player2.score) {
    console.log(`${player2.name} wins the game!`);
} else {
    console.log("The game is a tie!");
  }
  