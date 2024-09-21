// --dirname ----- path to the current directary
// --filename ---- file Name
// require ------- function to use modules (commonJS)
// modules ------- info abput current module (file)
// process ------- info about env where the program is being executed

console.log(__dirname)

setInterval(()=>{
    console.log('Hello World')
}, 1000)