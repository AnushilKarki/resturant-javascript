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
    window.alert('event booked successfullt');
    //converting object to string
}
function clearevent(){
    localStorage.removeItem('event');
}