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
    window.localStorage.setItem('event',JSON.stringify(eventarray)); 
    latestitem(); 
    // window.alert('event booked successfullt');
    //converting object to string
}
function clearevent(){
    localStorage.removeItem('event');
    latestitem(); 
}
function latestitem(){
    let j=0;
     const lat=JSON.parse(window.localStorage.getItem('event'));
//      const latest = [...new Set(lat.map((latestcart)=>{
//     return latestcart
//  }))]
      console.log(lat); 
        document.getElementById('event').innerHTML = lat.map((items)=>{
            var { name,phone,email,people,bar,date} = items;
            return (`
            <div class="cart-item">
            <h1 style='font-size:18px;'>Event booked Successfully : </h1>
            <h2 style='font-size:12px;'>Name : ${name}</h2>
            <h2 style='font-size:15px;'>Phone : ${phone}</h2>
            <h2 style='font-size:15px;'>Email :  ${email}</h2>
            <h2 style='font-size:15px;'>No of people :  ${people}</h2>
            <h2 style='font-size:15px;'>Bar :  ${bar}</h2>
            <h2 style='font-size:15px;'>Date :  ${date}</h2>
            `
            )
        }).join('');
}