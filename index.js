const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What do you want as the highest possible number?', ans => {
  if (isNaN(ans)) {
    console.log('Please specify a valid number.')
    process.exit()
    return
  }

const answ = ans - 1
  
    console.log(`Your random number is: ${1 + Math.floor(Math.random() * answ)}`)
    process.exit()
})


