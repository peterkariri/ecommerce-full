let menuBtn=document.querySelector('.menu-btn')
let closeBtn=document.querySelector('.close-menu')
let nav=document.querySelector('.nav')
let overlay=document.querySelector('.overlay')
//geting cart empty
let cartBtn=document.querySelector('.cart-btn')
let cartBox=document.querySelector('.cart-box')

//getting the counter plus and minus buttons
let plusBtn=document.querySelector('.plus-btn')
let minusBtn=document.querySelector('.minus-btn')
let quantityText=document.querySelector('.quantity')

 menuBtn.addEventListener("click",()=>{
    //css sudeo classes that are executed when the menu button is clicked
    nav.classList.add('active')
    overlay.classList.add('active')

 })

 closeBtn.addEventListener("click",()=>{
    //css sudeo classes that are executed when the menu button is clicked
    nav.classList.remove('active')

    overlay.classList.remove('active')

 })
 //drop down logic of the cart 

cartBtn.addEventListener("click",()=>{
    cartBox.classList.toggle('active')
})

//counter to add and remove elements from the cart
let quantity=0
plusBtn.addEventListener("click",()=>{
   quantity++ //new quantity
   if(quantity>0 && quantity<=50){
   quantityText.textContent=quantity
}
})
minusBtn.addEventListener("click",()=>{
    quantity--
    if(quantity>=0 || quantity<=50){
    quantityText.textContent=quantity
    }
})