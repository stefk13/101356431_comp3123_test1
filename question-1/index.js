console.log('\nQuestion 1\n')

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const stringToLowercase = (array) => {
  let promise = new Promise((resolve, reject) => {
    const checkStrings = array.filter(item => typeof item === 'string')
    
    if (checkStrings.length > 0) {
        const lowerCaseStrings = checkStrings.map(item => item.toLowerCase())
      resolve(lowerCaseStrings);
    } else {
      reject("Promise failed.");
    }
  })
  return promise
}

stringToLowercase(mixedArray).then(data => {
    console.log("Success:", data)
  })
  .catch(error => {
    console.error("Error:", error)
  })