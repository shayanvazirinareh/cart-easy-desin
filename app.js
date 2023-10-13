let $=document;
let iconShop=$.querySelector('.cart');
let ShopProduct=$.querySelector('.all-shop');
let closeShop=$.querySelector('.close');
//in-shop-cart
let mines=$.querySelector('.mines');
let plus=$.querySelector('.plus');
let subtopumbers=$.querySelector('.sup-cart');
let ziroprduct=$.querySelector('.ziro');
///
//in-shop-bottom-two-btn
let prices=$.querySelector('.pricenumber');
let priceproducttitles=$.querySelector('.price');
let flag=false;
let cunt=0;
closeShop.addEventListener('click',()=>{
    ShopProduct.style.transform='translateX(-500px';
        ShopProduct.style.transition='1.4s';
        iconShop.style.display='block'
})
iconShop.addEventListener('click',()=>{
        ShopProduct.style.transform='translateX(1px';
        ShopProduct.style.transition='1.4s';
        iconShop.style.display='none'

})
plus.addEventListener('click',()=>{
    cunt++
    ziroprduct.innerHTML=cunt
    prices.innerHTML=cunt
    subtopumbers.innerHTML=cunt

})
mines.addEventListener('click',()=>{
    if(ziroprduct.innerHTML==0){
        ziroprduct.innerHTML=0
    }else{
        cunt--
        ziroprduct.innerHTML=cunt
        prices.innerHTML=cunt
        subtopumbers.innerHTML=cunt
    
      }
})
//menu and itemul
let menu=$.querySelector('.menu');
let itemul=$.querySelector('.ul-header');
menu.addEventListener('click',()=>{
    if(!flag){
flag=true;
itemul.style.left='1%'
itemul.style.borderRadius='5%'
    }else{
        flag=false;
        itemul.style.left=''

    }
})