document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

let phone=document.getElementById("phone").value;

if(phone.length!=10){
alert("Phone number must be 10 digits");
return;
}

document.getElementById("msg").innerText="✅ Booking Successful!";
});