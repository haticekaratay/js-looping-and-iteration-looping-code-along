
function writeCards(array,gift) {
    let newarray = []
    for (let i = 0; i < array.length; i++){
        let message = `Thank you, ${array[i]}, for the wonderful ${gift} gift!`
        newarray.push(message);
        //console.log(message);
    }
    return newarray;
}
//let number = 10
function countDown(number){
    for(let i = number; i>=0; i--){
        console.log(i);
    }
}

//countDown(number);