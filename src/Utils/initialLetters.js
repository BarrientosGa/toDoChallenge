
export const initialLetters = (str) => {
    const string = str.split(" ")
    const arrayWords = string.map(element => element.charAt(0))
    const firtsLetter = arrayWords[0]
    const secondLetter = arrayWords[1]

    return firtsLetter.concat(secondLetter)
}