let bagĪtems;

onLoad()

function onLoad(){
  const bagItemString=localStorage.getItem('bagĪtems')
  bagĪtems=bagItemString?JSON.parse(bagItemString):[]
  displayItemOnḤomePage()
  displayBagIcon()

}

function addToBag(item){
  //const myJson=JSON.stringify(item)
bagĪtems.push(item)
localStorage.setItem('bagĪtems',JSON.stringify(bagĪtems))
displayBagIcon()
}

function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count')
  if(bagĪtems.length>0){
    bagItemCountElement.style.visibility='visible'
    bagItemCountElement.innerText=bagĪtems.length;

  }else{
    bagItemCountElement.style.visibility='hidden'
  }
}


function displayItemOnḤomePage(){
  let itemsContainer=document.querySelector('.items-container')

  if(!itemsContainer){
     return
  }
  let innerHTML=''
  items.forEach(item=>{
   innerHTML+= `
                <div class="item-container">
                  <img class="item-image" src='${item.image}' alt="item image">
                  <div class="rating">${item.rating.stars} ⭐| ${item.rating.count}</div>
                  <div class="company-name">${item.company}</div>
                  <div class="item-name">${item.item_name}</div>
                  <div class="price">
                      <span class="current-price">Rs ${item.current_price}</span>
                      <span class="original-price">Rs ${item.original_price}</span>
                      <span class="discount">(${item.discount_percentage}%OFF)</span>
                  </div>
                  <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
               </div>
                       `
  })
 
  itemsContainer.innerHTML=innerHTML;
  
  
}





