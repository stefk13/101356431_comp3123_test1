const fs = require('fs')
const path = require('path')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const removeLogs = () => {
  const logsDir = path.join(__dirname, 'Logs')

  if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir)
    
    files.forEach(file => {
      const filePath = path.join(logsDir, file)
      console.log(`Delete file: ${file}`)
      fs.unlinkSync(filePath)
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.')
    process.exit()
  } else {
    console.log('Logs directory does not exist.')
    process.exit()
  }
}


const createLogs = () => {
  const logsDir = path.join(__dirname, 'Logs')
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
    console.log('Logs directory created.')

    process.chdir(logsDir);

    for (let i = 0; i <= 9; i++) {
      const fileName = `log${i}.txt`
      const filePath = path.join(logsDir, fileName)
      fs.writeFileSync(filePath, `This is log file ${i} content.`)
      console.log(`Created file: ${fileName}`)
    }
    process.exit()
  } else {
    console.log('Logs directory already exists.')
    process.exit()
  }
}

// I realize we were not required to make a menu, but I made it because the two 
// functions can't run at the same time without throwing sync errors
// which I was not entirely sure how to fix.
function menu(){
readline.question('Enter 1 to create logs or 2 to delete logs ', (choice) => {
    if (choice === '1') {
        createLogs()
    } else if (choice === '2') {
        removeLogs()
    } else {
      console.log('Invalid choice. Please enter 1 or 2')
      askForChoice()
    }
  })
}

menu()