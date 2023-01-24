class Donut{

   constructor(){
       this.donutCount =0;
       this.autoClickerCount = 0;
       this.autoClickerCost = 10;
       this.donutMutiplier = 10;
       this.donutMutiplierCount = 0;
   }

  
     
   IncreaseAutoClickerCost(){
   this.autoClickerCost += this.autoClickerCost *0.1;
   }
   IncreaseDonutMutiplierCost(){
       this.donutMutiplier += this.donutMutiplier *0.2;
   }
   
     
   

   
}
export {Donut};