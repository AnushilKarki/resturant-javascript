function store(){ //stores items in the localStorage
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var people = document.getElementById('people').value;
    var bar = document.getElementById('bar').value;
    var date = document.getElementById('date').value;

    var eventarray = [];
    // eventarray = [name,phone,email,people,bar,date];
    const event = {
        name: name,
        phone: phone,
        email:email,
        people:people,
        bar:bar,
        date:date,
    }
    eventarray.push(event);
console.log(eventarray);
    window.localStorage.setItem('event',JSON.stringify(eventarray));  
    latest();
    // window.alert('event booked successfullt');
    //converting object to string
}
function clearevent(){
    localStorage.removeItem('event');
}

function latest(){
    let j=0, total=0;
     const lat=JSON.parse(window.localStorage.getItem('event'));
     const latest = [...new Set(lat.map((latestcart)=>{
    return latestcart
 }))]
      console.log(latest); 
        document.getElementById('event').innerHTML = latest.map((items)=>{
            var { name,phone} = items;
            return (`
            <div class="cart-item">
            <div class="row-img">
              <img class='rowing' src="/home/anudhil/Desktop/work_from_home/Restaurant/images/vegetable-jalfrezi.jpg">
            </div>
            <p style='font-size:12px;'>${name}</p>
            <h2 style='font-size:15px;'>$ ${phone}</h2>
            `+
             "<button onclick='delElement("+(j++)+")' style='width:30%;'>Remove</button></div>"
            )
        }).join('');
}