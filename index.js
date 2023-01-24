import { Donut } from "./Donut.js"
 
const donut = new Donut();


const donutImgEl = document.querySelector("#donutImg")
  donutImgEl.addEventListener("click",add)

  
const ClickerPrice = document.querySelector(".auto-clicker-price");

const MultiplierPrice = document.querySelector(".Donut-Mutliplier-price");

const AutoCount = document.querySelector(".How-Many-Auto-Clickers");

const MultiCount = document.querySelector(".How-Many-Multipliers");

function add(){
  donut.donutCount += Math.pow(1.2,donut.donutMutiplierCount);
  updateView();

}

function updateView(){
  document.getElementById('text').value = donut.donutCount;
  ClickerPrice.innerText = "auto Clicker Price: "+donut.autoClickerCost;
  MultiplierPrice.innerText = "Multiplier Price: "+donut.donutMutiplier;
  AutoCount.innerText = donut.autoClickerCount;
  MultiCount.innerText = donut.donutMutiplierCount;
}


const AutoClickerEl = document.querySelector("#AutoClickerButton");
AutoClickerEl.addEventListener("click", BuyAutoCLickerButton)

function BuyAutoCLickerButton(){
  if(donut.donutCount >= donut.autoClickerCost){
    donut.donutCount = donut.donutCount - donut.autoClickerCost;
    donut.autoClickerCount++;
    donut.autoClickerCost +=(donut.autoClickerCost * .10);
    updateView();
  }
}

const ResetEl = document.querySelector("#ResetButton");
ResetEl.addEventListener("click", ResetButton)

function ResetButton(){
  donut.donutCount = 0;
  donut.autoClickerCount = 0;
  donut.autoClickerCost = 10;
  donut.donutMutiplierCount = 0;
  donut.donutMutiplier = 10;
  updateView();
}

const MutiplierEl = document.querySelector("#DonutMutiplierButton");
MutiplierEl.addEventListener("click", BuyDonutMultiplierButton)

function BuyDonutMultiplierButton(){
    if(donut.donutCount >= donut.donutMutiplier){
      donut.donutCount = donut.donutCount - donut.donutMutiplier;
      donut.donutMutiplierCount++;
      donut.donutMutiplier +=(donut.donutMutiplier * .10);
      updateView();
    }
}


function timer(){
  donut.donutCount = donut.donutCount + donut.autoClickerCount * Math.pow(1.2,donut.donutMutiplierCount);
  updateView();
}
setInterval(timer, 1000)
