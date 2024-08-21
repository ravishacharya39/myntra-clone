
const CONVENIENCE_FEE=99;

let bagItemObject
onLoad()

function onLoad(){
  loadBagItemObjects()
  displayBagItem()
  displayBagSummary()
}

function displayBagSummary(){
  let bagSummary=document.querySelector('.bag-summary');

  let totalItems=bagItemObject.length;
  let totalMRP=0;
  let totalDiscount=0;
  

  bagItemObject.forEach(bagItemSummary=>{

    totalMRP += bagItemSummary.original_price;
    totalDiscount += bagItemSummary.original_price - bagItemSummary.current_price;

   
  })

  let finalPayment =totalMRP - totalDiscount + CONVENIENCE_FEE;
  bagSummary.innerHTML=`<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>`
}

function loadBagItemObjects(){
     bagItemObject= bagĪtems.map(itemId=>{
     for(let i=0;i<items.length;i++){
      if(itemId == items[i].id){
        return items[i]
      }
     }
   })
  
}

function displayBagItem(){

 let bagItemsContainer=document.querySelector('.bag-items-container');
 
 let innerHTML=''

 bagItemObject.forEach(bagItemObject=>{
  
  innerHTML+=generateHtml(bagItemObject)
 })

 bagItemsContainer.innerHTML=innerHTML;

}

function generateHtml(item){

return `
          <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBagItems(${item.id}); removeFromBagItems()">X</div>
          </div>`
}

function removeFromBagItems(itemId){

  // bagĪtems.splice(itemId,1)

 bagĪtems=bagĪtems.filter(bagItemId=>bagItemId!=itemId)
 localStorage.setItem('bagĪtems',JSON.stringify(bagĪtems))
 loadBagItemObjects()
 displayBagIcon()
 displayBagItem()
 displayBagSummary()

}
