let answer = [],
    guesses = [],
    Kimg, Bimg


function setup() {
    noCanvas()
    let input = createElement('input', 'Guess')
    input.changed(() => document.getElementById('response').innerHTML = check(input.value()))
let al = answer.length
    for (let k = 0; al < 4; k++) {
        let x = floor(random(1, 10))
        for (let m = 0; m < al; m++) if (x == answer[m]) x = floor(random(1, 10))
        answer.push(x)
    }
}

function check(number) {
    if (number.length != 4) return 'Four (4) digits Idiot'
    let guess = Array.from(number)
    let G = H = 0
let gl = guess.length
    for (let i = 0; i < gl; i++) {
        let al =answer.length
        for (let j = 0; j < al; j++) {
            if (guess[i] != answer[j]) {} else if (i == j) H++
            else G++
        }
    }

    guesses.push({N: number,G: G,H: H})
    let resp
    if (H != 4) {
        if (guesses[guesses.length - 2] && guesses[guesses.length - 2].H == H && guesses[guesses.length - 2].G == G) return `${H}${G}...`
        else return `${H}${G}`
    } else {
        let gl = guesses.length
        for (let g = 0; g < gl; g++) createElement('p', `${g}: ${guesses[g].N}, ${guesses[g].H}${guesses[g].G}`)
        return `4 Hits, What a Waste of Time`
    }
}