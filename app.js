//Global Variables.

//DOM Objects
const dieGeneratorButton =  document.getElementById("generate-die");
const rollDiceButton =  document.getElementById("roll-dice");
const sumDiceButton = document.getElementById("sum-dice");
const dieContainer = document.getElementById("dice-table");
//Global Arrays
const dieIdInt = [];
const dieNumParrallel = [];
const dieObjectContainer = [];

//Closure Counter for closure practice, and for global counter purposes.
let counter = (function(){
    let privateCounter = 0;
    function increaseBy(val){
        privateCounter += val;
    }
    function decreaseBy(val){
        privateCounter -= val;
    }
    return{
        increment: function(){
            increaseBy(1);
        },
        decreaseBy: function(){
            decreaseBy(1);
        },
        presentValue: function(){
            return privateCounter;
        }
    };
})();

class Die {
    constructor(value, die){
        this.value = value;
        this.die = die;
    }
    //Generates a die
    generateModDie(){
       this.die =  document.createElement("div")
       this.die.id = counter.presentValue();
       let dieTextArray = ""; 
     
       //Gets the count for the graphic, and the number that parallels each dice
       const diceGraphNubCount = this.value = Math.floor(Math.random()*6)+1;
       
       // Die Num Parallels Number Array for each die.
       dieNumParrallel[counter.presentValue()] = diceGraphNubCount;
       
       //Assigns the current Div ID to a corresponding array slot.
       dieIdInt[counter.presentValue()] = counter.presentValue();
   
       //Assigns a text value to die text array
       switch(diceGraphNubCount)
       { 
         case 1: 
            dieTextArray = "."; 
            break;
         case 2: 
            dieTextArray = "..";
            break;
         case 3: 
            dieTextArray = "...";
            break;
         case 4: 
            dieTextArray = "...\n.";
            break;
         case 5: 
            dieTextArray = "...\n..";
            break;
         case 6: 
            dieTextArray = "...\n...";
            break;          
       }
       this.die.textContent = dieTextArray;
       dieObjectContainer[counter.presentValue()] = this.die;
       
       //Rolls a dice when dice is clicked.
       this.die.addEventListener("click", function(e){
        const i = e.target.id;
        let dieTextArray = "";
        dieNumParrallel[i] = Math.floor(Math.random() * 6) + 1;
        switch (dieNumParrallel[i]) {
            case 1:
                dieTextArray = ".";
                dieObjectContainer[i].textContent = dieTextArray;
                break;
            case 2:
                dieTextArray = "..";
                dieObjectContainer[i].textContent = dieTextArray;
                break;
            case 3:
                dieTextArray = "...";
                dieObjectContainer[i].textContent = dieTextArray;
                break;
            case 4:
                dieTextArray = "...\n.";
                dieObjectContainer[i].textContent = dieTextArray;
                break;
            case 5:
                dieTextArray = "...\n..";
                dieObjectContainer[i].textContent = dieTextArray;
                break;
            case 6:
                dieTextArray = "...\n...";
                dieObjectContainer[i].textContent = dieTextArray;
                break;
        }
       });
       
       //Removes a Dice When a dice Double Clicked
        this.die.addEventListener("dblclick", function(e){
            const i = e.target.id;
            let x = 0;
            dieObjectContainer[i].remove();
            dieObjectContainer.splice(i, 1);
            const dieIdIntLength = dieObjectContainer.length;
            dieNumParrallel.splice(i, 1);
            dieIdInt.splice(i,1);
            counter.decreaseBy();
            for(x; x < dieIdIntLength; x++){
                dieObjectContainer[x].id = x;
                dieIdInt[x] = x;
            }
        });
        dieContainer.appendChild(this.die); 
        counter.increment();
}
    //Rolls a new num for all dice.
    roll(){
        let i = 0;
        const dieIdIntLength = dieNumParrallel.length;
        let dieTextArray = ""; 
        for(i; i < dieIdIntLength; i++){
                dieNumParrallel[i] = Math.floor(Math.random()*6)+1;
            switch(dieNumParrallel[i])
            { 
              case 1: 
                 dieTextArray = ".";
                 dieObjectContainer[i].textContent = dieTextArray; 
                 break;
              case 2: 
                 dieTextArray = "..";
                 dieObjectContainer[i].textContent = dieTextArray;
                 break;
              case 3: 
                 dieTextArray = "...";
                 dieObjectContainer[i].textContent = dieTextArray;
                 break;
              case 4: 
                 dieTextArray = "...\n.";
                 dieObjectContainer[i].textContent = dieTextArray;
                 break;
              case 5: 
                 dieTextArray = "...\n..";
                 dieObjectContainer[i].textContent = dieTextArray;
                 break;
              case 6: 
                 dieTextArray = "...\n...";
                 dieObjectContainer[i].textContent = dieTextArray;
                 break;
             default:
                 console.log("Not a number");
                 break;              
            }
         }
        }
    
    //Sums the current values of all dice.
    sum(){
        let i = 0;
        let sum = 0;
        let dieIdIntLength = dieNumParrallel.length;
        for(i; i < dieIdIntLength; i++){
            sum += dieNumParrallel[i];
        }
        alert(`The Sum is: ${sum}`);
    }
}

const die = new Die();    
 dieGeneratorButton.addEventListener("click", die.generateModDie); // Generates the die object, allows rolling a die, and removes a die when double clicked.
 rollDiceButton.addEventListener("click", die.roll);               // Rolls all dice
 sumDiceButton.addEventListener("click", die.sum);                 // Sums all dice