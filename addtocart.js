//this item is the menu item 
const item = [
    {
        id:0,
        category:'Entrée',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/vegetable-samosas.jpg',
        title:'Vegetable samosa',
        description:'Deep fried pastry stuffed with lightly spiced potatoes and green peas',
        price:7.50,
    },
    {
        id:1,
        category:'Entrée',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/onion.jpg',
        title:'Onion Bhaji ',
        description:'Coriander flavoured onion fritters',
        price:7.50,
    },
    {
        id:2,
        category:'Entrée',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/hara-bhara-kebab.jpg',
        title:'Hara Bhara kebab',
        description:'Shallow fried vegetable and spinach patties',
        price:12,
    },
    {
        id:3,
        category:'Entrée',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chicken-tikka-masala.jpg',
        title:'Chicken tikka',
        description:'Boneless marinated chicken grilled in tandoo',
        price:11,
    },
    {
        id:4,
        category:'Entrée',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/seekh.jpg',
        title:'Seekh kebab',
        description:'Spiced and skewed lamb mince cooked in tandoor',
        price:10,
    },
    {
        id:5,
        category:'chicken',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chicken-tikka-masala.jpg',
        title:'Chicken Tikka Masala (medium) ',
        description:'Unique combination of spices cooked with onion, capsicum and tomato',
        price:18,
    },
    {
        id:6,
        category:'chicken',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chickenbalti.jpg',
        title:'Chicken Balti (medium)',
        description:'Boneless chicken cooked in medium spiced sauce with onion, capsicum and tomat',
        price:18,
    },
    {
        id:7,
        category:'chicken',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chickenkorma.jpg',
        title:'Chicken Korma (mild)',
        description:'Chicken cooked in creamy cashew nut gravy',
        price:18,
    },
    {
        id:8,
        category:'chicken',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chickenkadai.jpg',
        title:'Kadai Chicken (medium)',
        description:'Chicken cooked in kadai gravy',
        price:18,
    },
    {
        id:9,
        category:'chicken',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chicken-vindaloo.jpg',
        title:'Chicken Vindaloo (HOT)',
        description:'Spicy curry prepared in goan style',
        price:18,
    },
    {
        id:10,
        category:'chicken',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/chickenmysore.jpg',
        title:'Mysore Chicken (HOT)',
        description:'Chicken cooked with fresh chillies in coconut creamy sauce',
        price:18,
    },
    {
        id:11,
        category:'lamb',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/lamb-rogan-josh.jpg',
        title:'Lamb Rogan Josh (medium)',
        description:'Lamb cooked in traditional north Indian style',
        price:19,
    },
    {
        id:12,
        category:'lamb',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/lamb-madras.jpg',
        title:'Lamb Korma (mild)',
        description:'Blend of creamy cashew nut gravy cooked with lamb',
        price:19,
    },
    {
        id:13,
        category:'lamb',
        image:'/home/anudhil/Desktop/work_from_home/Restaurant/images/lamb-madras.jpg',
        title:'Lamb Madras (medium)',
        description:'Creamy coconut based delicacy cooked to perfection',
        price:19,
    }
 ];
 const categories = [...new Set(item.map((product)=>{
    return product
 }))]

let i=0;
document.getElementById('root').innerHTML = categories.map((product)=>{
var {title,description,price,image} = product;
return (`
    <div class='box'>
   <div class='img-box'>
   <img class='images' src="${image}"></img>
    </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}</h2>
    `+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+`</div></div>`
)
}).join('')

var cart = [];
function completeorder(){
    window.localStorage.removeItem(order);
    displaycart();
}
function checkout(){
    // When you use setItem it overwrites the item which was there before it. 
    // You need to use getItem to retrieve the old list, append to it, then 
    // save it back to localStorage:

    var phone = document.getElementById('phone').value;
    window.localStorage.setItem('customer_contact',JSON.stringify(phone));
    window.localStorage.setItem('cart',JSON.stringify(cart));
    var orderedcart = JSON.parse(window.localStorage.getItem('order'));
    
    if(orderedcart == null){
        orderedcart = [];
        window.localStorage.setItem('order',JSON.stringify(orderedcart));
    } 

    // console.log(storedcart);
    // if(cart.length == 0){
    //     window.localStorage.setItem('cart',JSON.stringify(cart));
    // }
    // else {
        var storedcart = JSON.parse(window.localStorage.getItem('order'));
        // if(storedcart ){
            storedcart.forEach(myFunction)

            function myFunction(item) {
            //   arr[index] = item * 10;
            cart.push(item);
        }
       
        // window.localStorage.setItem('cart',JSON.stringify(cart));
        window.localStorage.setItem('order',JSON.stringify(cart));
        window.localStorage.removeItem('cart');
        // } 
    

    displaycart();
    // latestcart();
}
function addtocart(a){
    // push into cart array
    cart.push(categories[a]);
    window.localStorage.setItem('cart',JSON.stringify(cart));
    // use totacart value
  
   //set local storage for cart 
 
    displaycart();
}
function clearorder(){
    // clear all order data
    localStorage.removeItem('order');
    localStorage.removeItem('totalorder');
    localStorage.removeItem('customer_contact');
    window.alert('Thank you for ordering :)');
    displaycart();
}
function clearcart(){
    // clear all cart data
    window.localStorage.removeItem('cart');

    localStorage.removeItem('totalcart');
    displaycart();
    // latestcart();
}
function delElement(a){
    //reduce item from cart
    cart.splice(a,1);
    // set local storage for cart
    // window.localStorage.setItem('cart',JSON.stringify(cart)); 
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    //ckeck if cart is empty or not 
    if(cart.length==0){
        document.getElementById('cart').innerHTML='cart is empty';
        document.getElementById('total').innerHTML = "$ "+0+".00";
        // latestcart();
    }
    else {
        document.getElementById('cart').innerHTML = cart.map((items)=>{
            var { title,description,price,image} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+"";
            return (`
            <div class="cart-item">
            <div class="row-img">
            <img class='images' src="${image}"></img>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}</h2>
            `+
             "<button onclick='delElement("+(j++)+")' style='width:30%;'>Remove</button></div>"
            )
        }).join('');
        window.localStorage.setItem('totalcart',JSON.stringify(total));
        let k=0, totalorder=0;
        // const records = window.localStorage.getItem(cart);
            // localStorage.setItem('order',JSON.stringify());
            // localStorage.setItem('totalorder',JSON.stringify([]));
            const latestcartorder=JSON.parse(localStorage.getItem('order'));
            const latest = [...new Set(latestcartorder.map((latest)=>{
                return latest
             }))]

             document.getElementById('latestcart').innerHTML = latest.map((items)=>{
                var { title,description,price} = items;
                totalorder=totalorder+price;
                document.getElementById("latesttotal").innerHTML = "$ "+totalorder+"";
                return (`
                <div class="cart-item">
                <div class="row-img">
                  <img class='rowing' src="/home/anudhil/Desktop/work_from_home/Restaurant/images/vegetable-jalfrezi.jpg">
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}</h2>
                `+
                 "<button onclick='delElement("+(k++)+")' style='width:30%;'>Remove</button></div>"
                )
            }).join('');
            window.localStorage.setItem('totalorder',JSON.stringify(totalorder));
        
      
        //  console.log(latest); 
        
        // latestcart();
    }
    // latestcart();

}
function latestcart(){
    let j=0, total=0;
     const latestcart=JSON.parse(window.localStorage.getItem('cart'));
     const latest = [...new Set(latestcart.map((latestcart)=>{
    return latestcart
 }))]
      console.log(latest); 
        document.getElementById('latestcart').innerHTML = latest.map((items)=>{
            var { title,description,price} = items;
            total=total+price;
            document.getElementById("latesttotal").innerHTML = "$ "+total+"";
            return (`
            <div class="cart-item">
            <div class="row-img">
              <img class='rowing' src="/home/anudhil/Desktop/work_from_home/Restaurant/images/vegetable-jalfrezi.jpg">
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}</h2>
            `+
             "<button onclick='delElement("+(j++)+")' style='width:30%;'>Remove</button></div>"
            )
        }).join('');
}
