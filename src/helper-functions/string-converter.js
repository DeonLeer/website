export default function stringConverter(string) {
  const splitString = string.split("")
  let newString = ""
  splitString.map((character, index) => {
    if (index === 0) {
      newString = character.toUpperCase()
    } else if (character === character.toUpperCase()) {
      newString = newString + ' ' + character
    } else {
      newString = newString + character
    } 
    return newString
  })
  return newString
}
