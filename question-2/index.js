const resolvedPromise = () => {
   let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let success = { message: 'delayed success!' }
        resolve(success)
      } catch (error) {
        reject(error)
      }
    }, 500)
  })
  return promise1
}

const rejectedPromise = () => {
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('delayed exception!');
      } catch (error) {
        reject(error)
      }
    }, 500)
  })
  return promise2
}

resolvedPromise()
  .then((result) => {
    console.log('Message:', result.message)
  })
  .catch((error) => {
    console.error('Error:', error.message)
  })

rejectedPromise()
  .then((result) => {
    console.log('Message:', result.message)
  })
  .catch((error) => {
    console.error('Error:', error.message)
  })