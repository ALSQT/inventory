function Shoes (name, productCode, quantity, valuePI){
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePI = valuePI;
  }


let shoe1 = new Shoes("Nike", 110293, 1229, 158);
let shoe2 = new Shoes("Nike", 110293, 1530, 200);
let shoe3 = new Shoes("Nike", 110293, 1000, 88);
let shoe4 = new Shoes("Nike", 110293, 983, 108);
let shoe5 = new Shoes("Nike", 110293, 10001, 238);

let allShoes = [] //Empty array named allShoes

allShoes.push(shoe1, shoe2, shoe3, shoe4, shoe5); // pushes all 5 shoe objects into array



//function below returnns the shoe with the highest value per item

function heighestValShoe(){
let heighestVal = 0;
  for(let i in allShoes){
    if(heighestVal < allShoes[i].valuePI){
      heighestVal = allShoes[i].valuePI 
    }
  }
  console.log(`The heighest value oer item show is ${heighestVal}`)
}

// function below returns the shoe with the lowest value per item
function lowestValShoe(){
let lowestVal = allShoes[0].valuePI;
  for(let i in allShoes){
    if(lowestVal > allShoes[i].valuePI){
      lowestVal = allShoes[i].valuePI 
    }
  }
  console.log(`The lowest value oer item show is ${lowestVal}`)
}


function ascendingOrder(){
  let ascendingVal = 0;
  // let ran = [];
  // for(let i in allShoes){
  //   ascendingVal.push(allShoes[i].valuePI)
  // }
  // console.log(` This is it after the push: ${ascendingVal}`)

  // for(let i = 0; i < ascendingVal.length; i++){
  //   for(let i = 0; i < ascendingVal[i].valuePI; i++){
  //     console.log(ascendingVal[i].valuePI)
  //   ran.push(ascendingVal[i].valuePI)
  //   }
  //   console.log(ran)
  // }


  for(let i in allShoes){
    if(ascendingVal < allShoes[i].valuePI){
      ascendingVal = allShoes[i].valuePI
      console.log(ascendingVal)
    }
  }
}

// 158
// 200
// 88
// 108
// 238

heighestValShoe();
lowestValShoe();
ascendingOrder();
