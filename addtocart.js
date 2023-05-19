const item = [
    {
        id:0,
        category:'Entrée',
        title:'Vegetable samosa',
        description:'Deep fried pastry stuffed with lightly spiced potatoes and green peas',
        price:7.50,
    },
    {
        id:1,
        category:'Entrée',
        title:'Onion Bhaji ',
        description:'Coriander flavoured onion fritters',
        price:7.50,
    },
    {
        id:2,
        category:'Entrée',
        title:'Hara Bhara kebab',
        description:'Shallow fried vegetable and spinach patties',
        price:12,
    },
    {
        id:3,
        category:'Entrée',
        title:'Chicken tikka',
        description:'Boneless marinated chicken grilled in tandoo',
        price:11,
    },
    {
        id:4,
        category:'Entrée',
        title:'Seekh kebab',
        description:'Spiced and skewed lamb mince cooked in tandoor',
        price:10,
    },
    {
        id:5,
        category:'chicken',
        title:'Chicken Tikka Masala (medium) ',
        description:'Unique combination of spices cooked with onion, capsicum and tomato',
        price:18,
    },
    {
        id:6,
        category:'chicken',
        title:'Chicken Balti (medium)',
        description:'Boneless chicken cooked in medium spiced sauce with onion, capsicum and tomat',
        price:18,
    },
    {
        id:7,
        category:'chicken',
        title:'Chicken Korma (mild)',
        description:'Chicken cooked in creamy cashew nut gravy',
        price:18,
    },
    {
        id:8,
        category:'chicken',
        title:'Kadai Chicken (medium)',
        description:'Chicken cooked in kadai gravy',
        price:18,
    },
    {
        id:9,
        category:'chicken',
        title:'Chicken Vindaloo (HOT)',
        description:'Spicy curry prepared in goan style',
        price:18,
    },
    {
        id:10,
        category:'chicken',
        title:'Mysore Chicken (HOT)',
        description:'Chicken cooked with fresh chillies in coconut creamy sauce',
        price:18,
    },
    {
        id:11,
        category:'lamb',
        title:'Lamb Rogan Josh (medium)',
        description:'Lamb cooked in traditional north Indian style',
        price:19,
    },
    {
        id:11,
        category:'lamb',
        title:'Lamb Korma (mild)',
        description:'Blend of creamy cashew nut gravy cooked with lamb',
        price:19,
    },
    {
        id:11,
        category:'lamb',
        title:'Lamb Madras (medium)',
        description:'Creamy coconut based delicacy cooked to perfection',
        price:19,
    },
    {
        id:11,
        category:'lamb',
        title:'Saag Lamb (mild to medium)',
        description:'Diced lamb cooked with spinach sauce',
        price:19,
    },
    {
        id:11,
        category:'lamb',
        title:'Lamb Masala (medium)',
        description:'Lamb cooked in onion, tomato masala gravy',
        price:19,
    },
    {
        id:11,
        category:'lamb',
        title:'Lamb Vindaloo (HOT)',
        description:'Spicy lamb curry prepared in Goan style',
        price:19,
    }
 ];
 const categories = [...new Set(item.map((product)=>{
    return product
 }))]

let i=0;
document.getElementById('root').innerHTML = categories.map((product)=>{
var {title,description,price} = product;
return (`
    <div>

${title}
        ${description}
        ${price}
    </div>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"
)
}).join('')

var cart = [];

function addtocart(a){
    // push into cart array
    cart.push(categories[a]);
    console.log(cart);

   //set local storage for cart 
    window.localStorage.setItem('cart',JSON.stringify(cart)); 
   
    displaycart();
}
function clearcart(){
    localStorage.removeItem(cart);
}
function delElement(a){
    //reduce item from cart
    cart.splice(a,1);
    // set local storage for cart
    window.localStorage.setItem('cart',JSON.stringify(cart)); 
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    if(cart.length==0){
        document.getElementById('cart').innerHTML='cart is empty';
        document.getElementById('total').innerHTML = "$ "+0+".00";
    }
    else {
        document.getElementById('cart').innerHTML = cart.map((items)=>{
            var { title,description,price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (`
            <div>
             ${title}<br/>
             ${description}<br/>
             ${price}<br/>`+
             "<button onclick='delElement("+(j++)+")'>Delete item on cart</button></div>"
            )
        }).join('');
    }
}
