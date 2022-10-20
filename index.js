const prompt = require('prompt-sync')({ sigint: true })

var level = 1

function guess(level) {
    let score = 0
    let guess
    let username = prompt('What is your username? ')

    do {
        guess = prompt(`Enter your guess (1 - ${level + 1}) [-1 to quit]: `)


        let genNum = Math.round((Math.random() * (level)) + 1)
        if (Number(guess) === genNum) {
            score++
            level++
            console.log('You nailed it!')
            console.log(`You are now in level ${level}`)
        }
        else if (guess == -1) {
            break
        }
        else {
            console.log('OOPS! You missed, please try again')
            console.log(`The correct number was ${genNum}`);
        }
    } while (true)
    console.log(`\nBYE BYE ${username}`)
    console.log(`Your score is ${score}`);
}

guess(level)