// 1. take user input in each of the letters on the line. 
// limit input to only be one character -done
// 2. compare each letter of the input word and the correct word.
// Create enter button, when clicked
// check if word is an existing word

//  3. what happens: 1. letter is correct
//                  2. letter is wrong 
//                  3. letter is right but in the wrong place.

// refactor to move button event listener logic out to own function
// function buttonClickFunction() {
// let row1= document.getElementById("row1").children
//         for(let i = 0; i < row1.length; i++) {
//             // let combinedString = row1[0].value + row1[1].value + row1[2].value
//             //  console.log(combinedString) 
//             row1Word += row1[i].value 
//             // console.log(row1Word)
        
//         }
// }
function mainWord() {
    let words = ["and", "fix", "own", "are", "fly", "odd", "ape", "fry", "our"]
    let randomNumber = Math.floor(Math.random() * 9)
    let chosenWord = words[randomNumber]
    console.log(chosenWord)
    return chosenWord
}

const answer = mainWord()

let box1 = document.getElementById("box1")
let button = document.getElementById("button") 
function handleClick() {
    // Looping through the rows of the board
    for(let i = 1; i < 7; i++) {
        let rowWord = ''
        let row = document.getElementById("row" + i).children
        // Looping through each box
        for(let j = 0; j < row.length; j++) {
            rowWord += row[j].value 
        }
        // console.log(rowWord);
        let value = compareWords(rowWord, answer)
        // console.log(value)
        changeColor(value, row)
        // if value is all green
        // checkWinner(value)
    }
    
    
}
button.addEventListener('click', handleClick)

function compareWords(inputWord, correctWord) {
    let rowColors = []
    for(let x = 0; x < inputWord.length; x++) {
        let message = 'red';
        
        for( let y = 0; y < correctWord.length; y++) {
            if(inputWord[x] === correctWord[y] && x === y) {
                message = 'green'
            }else if(inputWord[x] === correctWord[y] && x !==y) {
                message = 'yellow'
            } 
        }

        rowColors.push(message)
    } 

    return rowColors
}
  
function changeColor(value, rows) {
    for( let i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = value[i]
    }
}  
        
function checkWinner(colors) {
    // loop colors check if all green
    button.removeEventListener('click', handleClick)
}





