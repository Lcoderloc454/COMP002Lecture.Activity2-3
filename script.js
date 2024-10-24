for(let i = 0; i <=10; i++){
    console.log(i)
} //result: It looped 10 times.

for(let i = 10; i >=0; i++){
    console.log(i)
} //result: It run infinitely until it got frozen.

for(let i = 10; i >=0; i--){
    console.log(i)
} //result: it ran until the PC could not take it.

let outputVariable = ""
for(let i = 0; i <=10; i++){
    outputVariable += "!";
    console.log(outputVariable)
}