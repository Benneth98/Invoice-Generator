
 let services = []
const washcarBtn = document.getElementById("Washcar-Btn")
const mowLanBtn = document.getElementById("MowLawn-Btn")
const pullWeedsBtn = document.getElementById("PullWeeds-Btn")
const price = document.getElementById("price-el")
const tasks = document.getElementById("column")
const totalEl = document.getElementById("coulmn1")
const SendInvoiceBtn = document.getElementById("SendInvoice-Btn")



washcarBtn.addEventListener("click",function(){

 if (!checkArray("Wash Car", services)){
      addService("Wash Car", "10")
        totalCost(services)
                }                          
})

mowLanBtn.addEventListener("click",function(){
   if (!checkArray("Mow Lawn", services)){
       addService("Mow Lawn", "20")
         totalCost(services)
                }  
})
pullWeedsBtn.addEventListener("click",function(){
  if (!checkArray("Pull Weeds", services)){
      addService("Pull Weeds", "30")
      totalCost(services)
                                       }  
})

SendInvoiceBtn.addEventListener("click",function(){
                services = []
                total = 0
                tasks.innerHTML = `<h4 class="text_accent">TASK</h4>`
                totalEl.innerHTML = `<h4 class="text_accent">TOTAL</h4> `
                price.innerHTML =  `$${total}`

})
// removeBtn.addEventListener("click",function(){
//            console.log("clicked")    
// })

                                          
function checkArray(option,arr){
       for(let i = 0;i < arr.length;i++) {
          if(arr[i]===option){
               return true         
          }
       }       
}

function addService(option,price){
 
               services.push(option)    
  tasks.innerHTML += `
             <h3 class="h3_accent">${option}<button class="remove" id="remove-btn">remove</button></h3>`
  totalEl.innerHTML += `
                        <h3 class="h3_accent">$${price}</h3> `
                                       
    }

function totalCost(arr){
   let total = 0
   for(let i = 0;i < arr.length;i++){
     if(arr[i] === "Wash Car"){
               total +=10
     }
     else if(arr[i] === "Mow Lawn"){
                    total +=20
     }
   
   else if(arr[i] === "Pull Weeds"){
               total +=30
}
price.innerHTML =  "$"+total
}
}

